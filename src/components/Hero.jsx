import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* animated background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent-2/15 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px] opacity-40" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container relative z-10 text-center flex flex-col items-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full glow-border bg-surface/60 px-4 py-1.5 text-sm text-muted mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
          </span>
          Open to new opportunities
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight"
        >
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-3 text-xl sm:text-2xl text-muted font-medium"
        >
          {profile.title}
        </motion.h2>

        <motion.p variants={item} className="mt-5 max-w-xl text-muted text-base sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition-transform hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
          >
            Contact Me
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-lg glow-border bg-surface/60 px-6 py-3 font-semibold text-text transition-transform hover:scale-105 hover:border-accent/40"
          >
            <FiDownload /> Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 text-muted text-2xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
