import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const groupVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-surface/40">
      <div className="section-container">
        <SectionHeading eyebrow="What I work with" title="Skills & Tech Stack" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl glow-border bg-surface/60 p-6"
            >
              <h3 className="mb-4 font-semibold text-accent">{group.category}</h3>
              <motion.div
                variants={groupVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    className="rounded-full bg-surface-2 px-3 py-1.5 text-sm text-text hover:text-accent hover:bg-accent/10 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
