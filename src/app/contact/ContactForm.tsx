"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
      budget: formData.get("budget"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-surface rounded-2xl p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-abyss"
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
        <h3 className="font-editorial text-2xl text-fawn mb-4">
          Message Sent!
        </h3>
        <p className="font-mono text-sm text-fawn-muted">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block font-mono text-xs text-amber uppercase tracking-wider mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-surface border border-surface-elevated rounded-xl px-4 py-3 font-mono text-sm text-fawn placeholder:text-fawn-muted focus:outline-none focus:border-amber transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-mono text-xs text-amber uppercase tracking-wider mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-surface border border-surface-elevated rounded-xl px-4 py-3 font-mono text-sm text-fawn placeholder:text-fawn-muted focus:outline-none focus:border-amber transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block font-mono text-xs text-amber uppercase tracking-wider mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full bg-surface border border-surface-elevated rounded-xl px-4 py-3 font-mono text-sm text-fawn placeholder:text-fawn-muted focus:outline-none focus:border-amber transition-colors"
          placeholder="Your company"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block font-mono text-xs text-amber uppercase tracking-wider mb-2"
        >
          Service Type
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-surface border border-surface-elevated rounded-xl px-4 py-3 font-mono text-sm text-fawn focus:outline-none focus:border-amber transition-colors appearance-none cursor-pointer"
        >
          <option value="">Select a service</option>
          <option value="2D Animation">2D Animation</option>
          <option value="3D Animation">3D Animation</option>
          <option value="Brand Films">Brand Films</option>
          <option value="Motion Graphics">Motion Graphics</option>
          <option value="Explainer Videos">Explainer Videos</option>
          <option value="Product Films">Product Films</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs text-amber uppercase tracking-wider mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-surface border border-surface-elevated rounded-xl px-4 py-3 font-mono text-sm text-fawn placeholder:text-fawn-muted focus:outline-none focus:border-amber transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block font-mono text-xs text-amber uppercase tracking-wider mb-2"
        >
          Budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full bg-surface border border-surface-elevated rounded-xl px-4 py-3 font-mono text-sm text-fawn focus:outline-none focus:border-amber transition-colors appearance-none cursor-pointer"
        >
          <option value="">Select a budget range</option>
          <option value="BD 500-1500">BD 500-1500</option>
          <option value="BD 1500-5000">BD 1500-5000</option>
          <option value="BD 5000-15000">BD 5000-15000</option>
          <option value="BD 15000+">BD 15000+</option>
        </select>
      </div>

      {error && (
        <p className="font-mono text-sm text-red-500 bg-red-500/10 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber text-abyss font-mono text-sm font-medium px-8 py-4 rounded-xl tracking-wider uppercase hover:bg-amber-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
