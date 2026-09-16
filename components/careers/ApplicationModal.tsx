"use client";

import { useEffect, useRef, useState } from "react";
import { FileUpload } from "@/components/careers/FileUpload";
import { submitJobApplication } from "@/lib/careers";
import type { Job } from "@/types";

type ApplicationModalProps = {
  job: Job;
  open: boolean;
  onClose: () => void;
};

type Errors = Partial<Record<"fullName" | "email" | "phone" | "resume", string>>;

const fieldClass =
  "w-full border-b border-foreground/20 bg-transparent py-3.5 text-[16px] transition-colors focus-visible:border-foreground";

export function ApplicationModal({ job, open, onClose }: ApplicationModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const dirty = Boolean(fullName || email || phone || portfolioUrl || message || resume);
  const dirtyRef = useRef(dirty);
  const successRef = useRef(success);
  dirtyRef.current = dirty;
  successRef.current = success;

  useEffect(() => {
    if (!open) return;
    setSuccess(false);
    setErrors({});
    setFullName("");
    setEmail("");
    setPhone("");
    setPortfolioUrl("");
    setMessage("");
    setResume(null);
    setSubmitting(false);
  }, [open, job.id]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const node = dialogRef.current;
    window.setTimeout(() => nameRef.current?.focus(), 20);

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (dirtyRef.current && !successRef.current) {
          const confirmed = window.confirm("Discard this application?");
          if (!confirmed) return;
        }
        onClose();
        return;
      }
      if (event.key !== "Tab" || !node) return;
      const items = [...node.querySelectorAll<HTMLElement>(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      )].filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.body.classList.add("page-lock");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("page-lock");
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  function attemptClose() {
    if (dirty && !success) {
      const confirmed = window.confirm("Discard this application?");
      if (!confirmed) return;
    }
    onClose();
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next: Errors = {};
    if (!fullName.trim()) next.fullName = "Enter your full name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!phone.trim()) next.phone = "Enter a phone number.";
    if (!resume) next.resume = "Upload your CV.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    const result = await submitJobApplication({
      fullName,
      email,
      phone,
      positionId: job.id,
      resume,
      portfolioUrl,
      message,
    });
    setSubmitting(false);
    if (result.ok) setSuccess(true);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-stretch justify-center md:items-center md:p-6">
      <button
        type="button"
        className="backdrop-enter absolute inset-0 bg-black/50"
        aria-label="Close application"
        onClick={attemptClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-title"
        className="modal-enter relative z-10 flex h-full w-full flex-col overflow-hidden bg-background md:h-[min(90dvh,54rem)] md:w-[min(42rem,92vw)] md:rounded-[20px]"
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-8">
          <p className="text-[12px] tracking-[0.18em] uppercase">Apply</p>
          <button type="button" onClick={attemptClose} aria-label="Close" className="text-2xl leading-none">
            ×
          </button>
        </div>

        {success ? (
          <div className="success-in flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-8 py-16">
            <h2 id="apply-title" className="font-serif text-[clamp(3rem,7vw,5.2rem)] leading-[0.86]">
              Application
              <br />
              received.
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-7">
              Thanks for reaching out. We’ll be in touch if there’s a match.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-10 self-start rounded-[6px] bg-secondary px-6 py-3.5 text-[12px] tracking-[0.16em] uppercase text-background"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="min-h-0 flex-1 space-y-6 overflow-y-auto px-6 pb-10 md:px-8" noValidate>
            <h2 id="apply-title" className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-[0.9]">
              {job.title}
            </h2>
            <Field
              ref={nameRef}
              id="apply-full-name"
              label="Full Name *"
              value={fullName}
              onChange={setFullName}
              error={errors.fullName}
              autoComplete="name"
            />
            <Field
              id="apply-email"
              label="Email Address *"
              type="email"
              value={email}
              onChange={setEmail}
              error={errors.email}
              autoComplete="email"
            />
            <Field
              id="apply-phone"
              label="Phone Number *"
              type="tel"
              value={phone}
              onChange={setPhone}
              error={errors.phone}
              autoComplete="tel"
            />
            <div>
              <p className="mb-2 text-[12px] tracking-[0.14em] uppercase">Position *</p>
              <p className={`text-foreground ${fieldClass}`}>{job.title}</p>
            </div>
            <FileUpload file={resume} onChange={setResume} error={errors.resume} />
            <Field
              id="apply-portfolio"
              label="LinkedIn / Portfolio"
              value={portfolioUrl}
              onChange={setPortfolioUrl}
              autoComplete="url"
            />
            <div>
              <label className="mb-2 block text-[12px] tracking-[0.14em] uppercase" htmlFor="apply-message">
                Message
              </label>
              <textarea
                id="apply-message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={fieldClass}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-[6px] bg-secondary py-4 text-[12px] tracking-[0.18em] uppercase text-background transition-opacity disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  ref,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  ref?: React.Ref<HTMLInputElement>;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[12px] tracking-[0.14em] uppercase">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClass}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-[13px] text-red-800" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
