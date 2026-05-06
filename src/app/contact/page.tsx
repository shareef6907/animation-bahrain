import { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Animation Bahrain",
  description:
    "Get in touch with Animation Bahrain. Start your animation project today.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-abyss">
        <Reveal>
          <h1
            className="font-editorial text-6xl md:text-8xl text-fawn mb-6 text-center"
            style={{ fontWeight: 400 }}
          >
            Let&apos;s Create Together
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-sm text-fawn-muted uppercase tracking-widest">
            Response within 24 hours
          </p>
        </Reveal>
      </section>

      {/* Contact Section */}
      <section className="py-32 lg:py-40 px-6 bg-night">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2
                  className="font-editorial text-3xl text-fawn mb-8"
                  style={{ fontWeight: 400 }}
                >
                  Get in Touch
                </h2>
                <div className="space-y-6 font-mono text-sm">
                  <div>
                    <span className="text-amber uppercase tracking-wider text-xs">
                      Email
                    </span>
                    <p className="text-fawn mt-1">
                      hello@animationbahrain.com
                    </p>
                  </div>
                  <div>
                    <span className="text-amber uppercase tracking-wider text-xs">
                      Phone
                    </span>
                    <p className="text-fawn mt-1">+973 3900 7750</p>
                  </div>
                  <div>
                    <span className="text-amber uppercase tracking-wider text-xs">
                      WhatsApp
                    </span>
                    <p className="text-fawn mt-1">+973 3900 7750</p>
                  </div>
                  <div>
                    <span className="text-amber uppercase tracking-wider text-xs">
                      Address
                    </span>
                    <p className="text-fawn mt-1">Hidd, Kingdom of Bahrain</p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-surface">
                  <p className="font-mono text-xs text-fawn-muted">
                    A division of{" "}
                    <a href="https://www.bahrainnights.com" target="_blank" rel="noopener" className="text-fawn hover:text-amber transition-colors">Bahrain Nights</a>
                  </p>
                  <p className="font-mono text-xs text-fawn-muted mt-1">
                    CR 113587-1, Hidd, Kingdom of Bahrain
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-abyss py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-video bg-surface rounded-2xl flex items-center justify-center">
            <span className="font-mono text-xs text-fawn-muted uppercase tracking-wider">
              Map coming soon
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
