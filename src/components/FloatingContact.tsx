"use client";

import { MessageCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function FloatingContact() {
  const [hovered, setHovered] = useState<string | null>(null);

  const buttons = [
    {
      id: "whatsapp",
      href: "https://wa.me/97339007750",
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: "Contact via WhatsApp",
      icon: <MessageCircle size={22} className="text-zinc-900" strokeWidth={1.75} />,
      label: "WhatsApp",
    },
    {
      id: "phone",
      href: "tel:+97339007750",
      target: "_self",
      rel: undefined,
      ariaLabel: "Call us",
      icon: <Phone size={22} className="text-zinc-900" strokeWidth={1.75} />,
      label: "Call",
    },
    {
      id: "email",
      href: "mailto:ceo@bahrainnights.com",
      target: "_self",
      rel: undefined,
      ariaLabel: "Email us",
      icon: <Mail size={22} className="text-zinc-900" strokeWidth={1.75} />,
      label: "Email",
    },
  ];

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Floating contact buttons"
    >
      {buttons.map((btn) => (
        <div key={btn.id} className="relative flex items-center justify-end">
          {/* Desktop hover tooltip */}
          <div className="hidden md:block">
            <div
              className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-[13px] px-3 py-1 rounded whitespace-nowrap transition-opacity duration-200 ${
                hovered === btn.id ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {btn.label}
            </div>
          </div>

<a
            href={btn.href}
            target={btn.target}
            rel={btn.rel}
            aria-label={btn.ariaLabel}
            onMouseEnter={() => setHovered(btn.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(btn.id)}
            onBlur={() => setHovered(null)}
            className="group flex items-center justify-center rounded-full bg-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 w-14 h-14 md:w-14 md:h-14"
          >
            {btn.icon}
          </a>
        </div>
      ))}
    </div>
  );
}
