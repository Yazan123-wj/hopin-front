"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus("success");
  }

  if (status === "success") {
    return <p className="mt-5 text-[14px]">You&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-5 flex max-w-[22rem] items-end gap-3">
      <label className="flex-1 text-[11px] tracking-[0.16em] uppercase">
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
          className="mt-2 w-full border-b border-header-text/30 bg-transparent py-2 text-[15px] tracking-normal normal-case placeholder:text-header-text/40"
        />
      </label>
      <button
        type="submit"
        className="shrink-0 pb-2 text-[11px] tracking-[0.16em] uppercase"
      >
        Join ↗
      </button>
    </form>
  );
}
