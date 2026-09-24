"use client";

import { useState } from "react";
import { submitContactMessage } from "@/lib/contact";

const fieldClass =
  "mt-2 w-full border-b border-foreground/20 bg-transparent py-3.5 text-[16px] transition-colors focus-visible:border-foreground";

type Errors = Partial<Record<"fullName" | "email", string>>;

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next: Errors = {};
    if (!fullName.trim()) next.fullName = "Enter your full name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    const result = await submitContactMessage({ fullName, email, message });
    setSubmitting(false);
    if (result.ok) setSuccess(true);
  }

  if (success) {
    return (
      <p className="max-w-[32ch] text-[17px] leading-7">
        Thanks — we&apos;ve got your message and will be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-[28rem]" noValidate>
      <label className="block text-[12px] tracking-[0.16em] uppercase" htmlFor="contact-full-name">
        Full name
        <input
          id="contact-full-name"
          type="text"
          name="fullName"
          autoComplete="name"
          placeholder="Jane Smith"
          value={fullName}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "contact-full-name-error" : undefined}
          onChange={(event) => setFullName(event.target.value)}
          className={fieldClass}
        />
      </label>
      {errors.fullName ? (
        <p id="contact-full-name-error" className="mt-2 text-[13px] text-secondary" role="alert">
          {errors.fullName}
        </p>
      ) : null}

      <label className="mt-8 block text-[12px] tracking-[0.16em] uppercase" htmlFor="contact-email">
        Email address
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="jane@example.com"
          value={email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
        />
      </label>
      {errors.email ? (
        <p id="contact-email-error" className="mt-2 text-[13px] text-secondary" role="alert">
          {errors.email}
        </p>
      ) : null}

      <label className="mt-8 block text-[12px] tracking-[0.16em] uppercase" htmlFor="contact-message">
        Message
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="How can we help?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="mt-10 inline-flex items-center rounded-[6px] bg-white px-6 py-3.5 text-[12px] tracking-[0.16em] uppercase text-primary transition-colors duration-300 hover:bg-white/90 disabled:opacity-60"
      >
        {submitting ? "Sending" : "Send a message"}
      </button>
    </form>
  );
}
