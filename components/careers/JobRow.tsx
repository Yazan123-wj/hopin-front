"use client";

import { useState } from "react";
import { ApplicationModal } from "@/components/careers/ApplicationModal";
import type { Job } from "@/types";

export function JobRow({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);
  const [apply, setApply] = useState(false);

  return (
    <article className="border-t border-line">
      <button
        type="button"
        className="group flex w-full items-end justify-between gap-6 py-7 text-left transition-colors duration-300 hover:bg-foreground/[0.035] md:-mx-2 md:px-4"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <div>
          <h3 className="font-serif text-[clamp(1.8rem,3.6vw,3.1rem)] leading-[0.95] transition-transform duration-300 group-hover:translate-x-1.5">
            {job.title}
          </h3>
          <p className="mt-3 text-[12px] tracking-[0.12em] uppercase text-muted">
            {job.location}
            <span className="mx-3">·</span>
            {job.employmentType}
          </p>
        </div>
        <span className="mb-1 shrink-0 text-[12px] tracking-[0.16em] uppercase">
          {open ? "Close" : "View role"}
          <span className="arrow ml-2" aria-hidden>
            →
          </span>
        </span>
      </button>
      {open ? (
        <div className="grid max-w-3xl gap-8 pb-12 md:grid-cols-2">
          <div className="md:col-span-2">
            <p className="max-w-2xl text-[16px] leading-7">{job.description}</p>
          </div>
          <div>
            <h3 className="text-[12px] tracking-[0.18em] uppercase">Responsibilities</h3>
            <ul className="mt-4 space-y-2 text-[15px] leading-6">
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[12px] tracking-[0.18em] uppercase">Requirements</h3>
            <ul className="mt-4 space-y-2 text-[15px] leading-6">
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={() => setApply(true)}
              className="group inline-flex items-center gap-3 rounded-[6px] bg-secondary px-6 py-3.5 text-[12px] tracking-[0.16em] uppercase text-white transition-colors duration-300 hover:bg-secondary/90"
            >
              Apply now
              <span className="arrow" aria-hidden>
                ↗
              </span>
            </button>
          </div>
        </div>
      ) : null}
      <ApplicationModal job={job} open={apply} onClose={() => setApply(false)} />
    </article>
  );
}
