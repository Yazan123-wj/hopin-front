import type { Metadata } from "next";
import Image from "next/image";
import { JobRow } from "@/components/careers/JobRow";
import { getActiveJobs } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open positions at the café. Come build something good with us.",
};

export default function CareersPage() {
  const openJobs = getActiveJobs();

  return (
    <>
      <section className="relative h-[88dvh] min-h-[28rem] overflow-hidden">
        <Image
          src="/images/staff.jpg"
          alt="The Hop In café"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 text-white md:px-8 md:pb-14">
          <h1 className="max-w-[10ch] font-serif text-[clamp(3.4rem,10vw,8.5rem)] leading-[0.84]">
            Come work
            <br />
            with us.
          </h1>
          <p className="mt-5 text-[15px] text-white/85">Good people welcome.</p>
        </div>
      </section>

      <section className="bg-background px-5 py-[var(--section-space)] md:px-8 md:py-[var(--section-space-lg)]">
        <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[0.9]">
          Open roles
        </h2>
        {openJobs.length === 0 ? (
          <div className="py-20 text-center">
            <p className="mx-auto max-w-[12ch] font-serif text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.9]">
              No open positions right now.
            </p>
            <p className="mx-auto mt-8 max-w-md text-[16px]">
              Check back soon. Good people are always worth meeting.
            </p>
          </div>
        ) : (
          <div className="mt-8 border-b border-line">
            {openJobs.map((job) => (
              <JobRow key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
