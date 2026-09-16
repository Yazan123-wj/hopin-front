"use client";

import { useEffect, useState } from "react";

const slides = [
  "A warmer way to start — croffles, coffee, and a room worth staying in.",
  "Come for the coffee. Stay for the croffles.",
  "Make it fresh. Keep it simple. Serve it kindly.",
];

export function StatementSwiper() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  return (
    <section
      className="flex flex-col items-center bg-background px-5 py-16 text-center md:px-8 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="text-[12px] tracking-[0.22em] uppercase text-secondary">The idea</p>
      <div
        className="relative mt-6 w-full overflow-hidden"
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={(event) => {
          if (touchStart === null) return;
          const delta = event.changedTouches[0].clientX - touchStart;
          if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
          setTouchStart(null);
        }}
      >
        <div className="relative mx-auto min-h-[15rem] w-full max-w-[18ch] font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.95] md:min-h-[17rem]">
          {slides.map((slide, slideIndex) => (
            <p
              key={slide}
              aria-hidden={slideIndex !== index}
              className={`absolute inset-x-0 top-0 text-center transition-all duration-500 ${
                slideIndex === index
                  ? "translate-x-0 opacity-100"
                  : slideIndex < index
                    ? "-translate-x-8 opacity-0"
                    : "translate-x-8 opacity-0"
              }`}
            >
              {slide}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous statement"
          className="text-[13px] tracking-[0.16em] uppercase"
          onClick={() => go(index - 1)}
        >
          ←
        </button>
        <div className="flex gap-2" role="tablist" aria-label="About statements">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={`Statement ${slideIndex + 1}`}
              className={`h-1.5 w-6 transition-colors ${
                slideIndex === index ? "bg-secondary" : "bg-foreground/20"
              }`}
              onClick={() => go(slideIndex)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next statement"
          className="text-[13px] tracking-[0.16em] uppercase"
          onClick={() => go(index + 1)}
        >
          →
        </button>
      </div>
    </section>
  );
}
