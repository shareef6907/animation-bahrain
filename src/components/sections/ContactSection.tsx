"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-night py-24 px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-white/60 mb-8">Ready to start your project? Send us a message.</p>

        {status === "success" ? (
          <div className="text-white/80 bg-green-900/30 border border-green-700 rounded-lg p-4">
            Message sent. We will be in touch shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-abyss border border-white/10 text-white placeholder-white/40 rounded-md px-4 py-3 focus:outline-none focus:border-white/30"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-abyss border border-white/10 text-white placeholder-white/40 rounded-md px-4 py-3 focus:outline-none focus:border-white/30"
              />
            </div>
            <div>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project"
                className="w-full bg-abyss border border-white/10 text-white placeholder-white/40 rounded-md px-4 py-3 focus:outline-none focus:border-white/30 resize-none"
              />
            </div>
            {status === "error" && (
              <div className="text-red-400 text-sm">Something went wrong. Please try again.</div>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
