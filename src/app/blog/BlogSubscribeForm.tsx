"use client";

import { useState, FormEvent } from "react";

export default function BlogSubscribeForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/blog-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-surface rounded-2xl p-8 text-center">
        <p className="font-mono text-sm text-fawn">
          Thanks for subscribing! We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        className="flex-1 bg-surface border border-surface-elevated rounded-xl px-4 py-3 font-mono text-sm text-fawn placeholder:text-fawn-muted focus:outline-none focus:border-amber transition-colors"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-amber text-abyss font-mono text-sm font-medium px-8 py-3 rounded-xl tracking-wider uppercase hover:bg-amber-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </button>
      {error && (
        <p className="font-mono text-sm text-red-500 mt-2 sm:mt-0 sm:absolute sm:-bottom-6">
          {error}
        </p>
      )}
    </form>
  );
}
