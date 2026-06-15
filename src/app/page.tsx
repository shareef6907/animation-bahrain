"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

// Video portfolio items (add more videos as you upload them)
const portfolioItems = [
  {
    id: 1,
    title: "BN Drink Animation",
    category: "Motion Graphics",
    client: "Bahrain Nights",
    video: "/bn-drink-animation.mp4",
  },
  // Add more videos here as you upload them to public/
];

const services = [
  {
    name: "2D Animation",
    description: "Classic handcrafted animation for timeless storytelling",
  },
  {
    name: "3D Animation",
    description: "Three-dimensional worlds rendered to perfection",
  },
  {
    name: "Brand Films",
    description: "Cinematic narratives that don't look like ads",
  },
  {
    name: "Motion Graphics",
    description: "Dynamic graphics that captivate and convert",
  },
  {
    name: "Explainer Videos",
    description: "Clear, compelling narratives that explain it all",
  },
  {
    name: "Product Films",
    description: "Product stories that turn features into desire",
  },
];

const whyUsPoints = [
  {
    title: "Cinematic First",
    description:
      "We approach every project with a filmmaker's eye — story, composition, pacing — before a single frame is rendered.",
  },
  {
    title: "GCC-Focused",
    description:
      "Deep understanding of the Gulf market dynamics, cultural nuances, and regional aesthetic preferences.",
  },
  {
    title: "Bahrain Based",
    description:
      "Strategically positioned in Manama to serve the entire GCC region with agile, responsive production.",
  },
];

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("sent");
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setFormStatus("idle");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus("idle");
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-abyss min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{
          background: "linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-amber flex items-center justify-center shadow-[0_0_20px_rgba(217,119,6,0.5)]">
              <span className="font-editorial text-abyss font-bold text-lg">A</span>
            </div>
            <div>
              <span className="font-editorial text-fawn text-lg tracking-tight">
                Animation
              </span>
              <span className="font-mono text-amber text-xs block -mt-1">BAHRAIN</span>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-6">
            <li>
              <a
                href="#services"
                className="font-mono text-xs text-fawn-muted hover:text-amber transition-colors duration-300 tracking-wider uppercase"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="font-mono text-xs text-fawn-muted hover:text-amber transition-colors duration-300 tracking-wider uppercase"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                className="font-mono text-xs text-fawn-muted hover:text-amber transition-colors duration-300 tracking-wider uppercase"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-mono text-xs bg-amber text-abyss px-4 py-2 rounded-lg font-medium tracking-wider uppercase hover:bg-amber-light hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/poster.jpg"
          >
            <source src="/bn-drink-animation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-abyss/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-abyss" />
        </div>

        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber/10 rounded-full blur-[100px]" />

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-6"
        >
          <Reveal>
            <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-bold text-fawn tracking-tight">
              Cinematic Animation,
              <br />
              <span className="text-amber drop-shadow-[0_0_30px_rgba(217,119,6,0.8)]">
                Built in Bahrain
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-mono text-sm md:text-base text-fawn-muted tracking-wider uppercase max-w-2xl mx-auto">
              From explainer films to brand cinema — we craft animation that moves
              people, not just pixels.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-3 bg-amber text-abyss font-mono text-sm font-medium tracking-wider uppercase rounded-lg overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-fawn transition-colors duration-300">
                  Start Your Project
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber via-amber-light to-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-3 border border-amber/50 text-amber font-mono text-sm tracking-wider uppercase rounded-lg hover:bg-amber/10 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </Reveal>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2 text-fawn-muted">
            <span className="font-mono text-xs uppercase tracking-widest">
              Scroll
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="relative py-24 px-6 bg-night">
        {/* Glow accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
        
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-fawn">
              Our Services
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-fawn-muted">
              From concept to final render, we deliver excellence at every frame.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Reveal key={service.name} delay={0.1 * index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-surface border border-transparent hover:border-amber/50 transition-all duration-300"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_10px_rgba(217,119,6,0.8)]" />
                      <span className="font-editorial text-xl text-fawn">
                        {service.name}
                      </span>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-wide text-fawn-muted">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="relative py-24 px-6 bg-abyss">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-fawn">
              Our Work
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-fawn-muted">
              Selected projects showcasing our animation capabilities.
            </p>
          </Reveal>

          {portfolioItems.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <Reveal key={item.id} delay={0.1 * index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative rounded-2xl overflow-hidden aspect-video bg-surface"
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-amber/90 flex items-center justify-center shadow-[0_0_30px_rgba(217,119,6,0.5)]">
                        <svg
                          className="w-6 h-6 text-abyss ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="font-mono text-xs text-amber uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-editorial text-xl text-fawn mt-2">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs text-fawn-muted mt-1">
                        {item.client}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 p-12 rounded-2xl border border-dashed border-surface-elevated text-center">
              <p className="font-mono text-sm text-fawn-muted">
                More projects coming soon...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="relative py-24 px-6 bg-night">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-fawn">
              Why Choose Us
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-fawn-muted">
              The advantages of partnering with Bahrain&apos;s premier animation
              studio.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsPoints.map((point, index) => (
              <Reveal key={point.title} delay={0.1 * index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex flex-col p-6 rounded-2xl bg-surface border border-surface-elevated"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber/20 shadow-[0_0_20px_rgba(217,119,6,0.3)]">
                    <svg
                      className="h-6 w-6 text-amber"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-fawn">
                    {point.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed uppercase tracking-wide text-fawn-muted">
                    {point.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-24 px-6 bg-abyss">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-fawn text-center">
              Let&apos;s Create Something Amazing
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-fawn-muted text-center">
              Tell us about your project and we&apos;ll bring your vision to life.
            </p>
          </Reveal>

          {formStatus === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 p-8 rounded-2xl bg-surface border border-amber/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-amber"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-editorial text-2xl text-fawn mb-2">
                Message Sent!
              </h3>
              <p className="font-mono text-sm text-fawn-muted">
                We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="mt-6 font-mono text-xs text-amber hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="md:col-span-2">
                <label className="block font-mono text-xs text-fawn-muted uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface border border-surface-elevated rounded-lg text-fawn font-mono text-sm focus:border-amber focus:outline-none focus:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-mono text-xs text-fawn-muted uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface border border-surface-elevated rounded-lg text-fawn font-mono text-sm focus:border-amber focus:outline-none focus:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all duration-300"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-fawn-muted uppercase tracking-wider mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface border border-surface-elevated rounded-lg text-fawn font-mono text-sm focus:border-amber focus:outline-none focus:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-fawn-muted uppercase tracking-wider mb-2">
                  Service Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface border border-surface-elevated rounded-lg text-fawn font-mono text-sm focus:border-amber focus:outline-none focus:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block font-mono text-xs text-fawn-muted uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface border border-surface-elevated rounded-lg text-fawn font-mono text-sm focus:border-amber focus:outline-none focus:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full py-4 bg-amber text-abyss font-mono text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-amber-light hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-6 bg-night border-t border-surface-elevated">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber flex items-center justify-center">
              <span className="font-editorial text-abyss font-bold text-sm">A</span>
            </div>
            <span className="font-editorial text-fawn">Animation Bahrain</span>
          </div>
          <p className="font-mono text-xs text-fawn-muted">
            © {new Date().getFullYear()} Animation Bahrain. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}