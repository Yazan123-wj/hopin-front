"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

const ACCEPTED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

type FileUploadProps = {
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
};

export function FileUpload({ file, onChange, error }: FileUploadProps) {
  const id = useId();
  const [drag, setDrag] = useState(false);
  const [localError, setLocalError] = useState("");

  function accept(next: File | null) {
    if (!next) {
      onChange(null);
      setLocalError("");
      return;
    }
    const okType =
      ACCEPTED.includes(next.type) ||
      /\.(pdf|doc|docx)$/i.test(next.name);
    if (!okType) {
      setLocalError("Please upload a PDF, DOC or DOCX file.");
      return;
    }
    setLocalError("");
    onChange(next);
  }

  const message = error || localError;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[12px] tracking-[0.14em] uppercase">
        CV / Resume *
      </label>
      <div
        onDragOver={(event) => {
          event.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDrag(false);
          accept(event.dataTransfer.files[0] ?? null);
        }}
        className={cn(
          "border border-dashed border-foreground/25 px-5 py-12 text-center transition-colors duration-300",
          drag && "border-foreground bg-foreground/5",
          message && "border-red-800",
        )}
      >
        {file ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-[15px]">✓ {file.name}</p>
            <div className="flex gap-6 text-[11px] tracking-[0.16em] uppercase">
              <label htmlFor={id} className="cursor-pointer underline underline-offset-4">
                Change
              </label>
              <button type="button" className="underline underline-offset-4" onClick={() => accept(null)}>
                Remove
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className="text-[13px] tracking-[0.14em] uppercase">Drop your CV here</p>
            <p className="mt-2 text-[13px] text-muted">PDF, DOC or DOCX</p>
            <label
              htmlFor={id}
              className="mt-5 inline-block cursor-pointer text-[12px] tracking-[0.16em] uppercase underline underline-offset-4"
            >
              Browse files
            </label>
          </>
        )}
        <input
          id={id}
          type="file"
          className="sr-only"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(event) => accept(event.target.files?.[0] ?? null)}
        />
      </div>
      {message ? (
        <p className="mt-2 text-[13px] text-red-800" role="alert">
          {message}
        </p>
      ) : null}
    </div>
  );
}
