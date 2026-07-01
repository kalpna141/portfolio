import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { education } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="My background" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-2xl items-center gap-6 rounded-2xl glow-border bg-surface/60 p-6 sm:p-8"
        >
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent">
            <FiAward />
          </span>
          <div>
            <h3 className="font-semibold text-text">{education.degree}</h3>
            <p className="mt-1 text-sm text-accent">{education.school}</p>
            <p className="mt-1 text-sm text-muted">
              {education.location} · {education.period}
            </p>
            <p className="mt-1 text-sm text-muted">GPA: {education.gpa}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
