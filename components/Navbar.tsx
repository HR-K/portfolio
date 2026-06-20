"use client";

import { Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="font-bold tracking-wide">
          HRK
        </div>

        <div className="flex items-center gap-6">

          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#timeline" className="hover:text-blue-400">
            Journey
          </a>  
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>

          <a href="#certifications" className="hover:text-blue-400">
            Certifications
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>

          <a
            href="https://github.com/HR-K"
            target="_blank"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="hover:text-blue-400"
          >
            Resume
          </a>

          <a
            href="mailto:kavalihemantharayudu@gmail.com"
          >
            <Mail size={20} />
          </a>

        </div>

      </div>
    </nav>
  );
}