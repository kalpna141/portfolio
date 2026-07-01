import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-lg text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
