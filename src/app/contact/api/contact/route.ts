import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, service, message, budget } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log("Contact form submission:", {
    name,
    email,
    company,
    service,
    message,
    budget,
  });

  return NextResponse.json({ success: true });
}
