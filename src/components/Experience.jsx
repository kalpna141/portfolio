import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10 sm:left-[23px]" />

          <div className="flex flex-col gap-10">
            {experience.map((job, idx) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex-shrink-0">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-lg sm:h-12 sm:w-12 ${
                      job.current
                        ? "bg-accent text-bg shadow-lg shadow-accent/30"
                        : "bg-surface-2 text-accent glow-border"
                    }`}
                  >
                    <FiBriefcase />
                  </span>
                </div>

                <div className="flex-1 rounded-2xl glow-border bg-surface/60 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-text">{job.role}</h3>
                    {job.current && (
                      <span className="rounded-full bg-accent-2/15 px-3 py-1 text-xs font-medium text-accent-2">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-accent">
                    {job.company} · {job.location}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{job.period}</p>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
