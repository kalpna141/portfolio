import { motion } from "framer-motion";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-surface/40">
      <div className="section-container">
        <SectionHeading eyebrow="What I've built" title="Projects" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col rounded-2xl glow-border bg-surface/70 p-6 transition-shadow hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent text-xl">
                  <FiFolder />
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                    aria-label={`Visit ${project.name}`}
                  >
                    <FiExternalLink className="text-lg" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-semibold text-text">{project.name}</h3>
              <p className="mt-1 text-xs text-muted">{project.company}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
