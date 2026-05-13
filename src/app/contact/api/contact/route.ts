import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (name.length > 255 || email.length > 255 || message.length > 5000) {
      return NextResponse.json(
        { error: "Field value too long" },
        { status: 400 }
      );
    }

    // Supabase insert
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: lead, error: dbError } = await supabase
      .from("animation_bahrain_leads")
      .insert({
        name,
        email,
        company: company || null,
        service: service || null,
        budget: budget || null,
        message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Supabase insert failed:", dbError);
      return NextResponse.json(
        { error: "Failed to save inquiry" },
        { status: 500 }
      );
    }

    // Resend notification — best-effort, lead is already saved
    try {
      const resend = new Resend(process.env.RESEND_API_KEY!);
      await resend.emails.send({
        from: "Animation Bahrain <noreply@bahrainnights.com>",
        to: ["ceo@bahrainnights.com"],
        replyTo: email,
        subject: `New inquiry from animationbahrain.com — ${name}`,
        html: `
          <h2>New Animation Bahrain Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "—"}</p>
          <p><strong>Service:</strong> ${service || "—"}</p>
          <p><strong>Budget:</strong> ${budget || "—"}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p style="color:#666;font-size:12px;">
            Lead ID: ${lead.id}<br/>
            Submitted: ${new Date().toISOString()}<br/>
            Source: animationbahrain.com<br/>
            <a href="https://supabase.com/dashboard">View in Supabase &rarr;</a>
          </p>
        `,
      });
    } catch (emailError) {
      console.error("Resend email failed:", emailError);
      // Lead is saved; email is optional. Don't fail the request.
    }

    return NextResponse.json({ success: true, leadId: lead.id });

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
