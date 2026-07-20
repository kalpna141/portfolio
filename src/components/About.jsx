import { motion } from "framer-motion";
import { FiMapPin, FiBookOpen, FiCode } from "react-icons/fi";
import { profile, education } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const facts = [
  { icon: <FiMapPin />, label: "Location", value: profile.location },
  { icon: <FiCode />, label: "Experience", value: "2.5 Years" },
  {
    icon: <FiBookOpen />,
    label: "Education",
    value: `${education.degree.split("(")[1]?.replace(")", "") || "BCA"}`,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] items-start">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-muted text-lg leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-4 rounded-xl glow-border bg-surface/60 px-5 py-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent text-lg">
                  {fact.icon}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">
                    {fact.label}
                  </p>
                  <p className="font-medium text-text">{fact.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
