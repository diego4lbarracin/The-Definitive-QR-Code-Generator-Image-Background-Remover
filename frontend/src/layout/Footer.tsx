import { Github, Linkedin, Heart } from "lucide-react";
import { SOCIAL_LINKS } from "../constants/app.constants";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-slate-700 py-6 px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-slate-300 flex items-center gap-2">
          Developed with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
          by diego4lbarracin
        </p>
        <div className="flex gap-4">
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
