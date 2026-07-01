import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  { icon: <FiMail />, label: profile.email, href: `mailto:${profile.email}` },
  { icon: <FiPhone />, label: profile.phone, href: `tel:${profile.phone}` },
  { icon: <FiGithub />, label: "GitHub", href: profile.github },
  { icon: <FiLinkedin />, label: "LinkedIn", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Let's connect" title="Get In Touch" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center text-muted"
        >
          I'm always open to discussing new projects, opportunities, or collaborations. Feel free
          to reach out through any of the channels below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl glow-border bg-surface/60 px-5 py-4 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-lg text-accent">
                {link.icon}
              </span>
              <span className="font-medium text-text">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
