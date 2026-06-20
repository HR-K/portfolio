"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 text-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="mb-4 uppercase tracking-[0.3em] text-blue-400">
          Assistant System Engineer
        </p>

        <h1 className="text-6xl font-bold md:text-8xl">
          Hemantha Rayudu Kavali
        </h1>

        <h2 className="mt-4 text-2xl text-zinc-400 md:text-4xl">
          Cloud • Infrastructure • DevOps • Cybersecurity
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-zinc-500">
          Building reliable systems through Linux, Networking, Cloud Technologies, Security and Automation.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/HR-K"
              target="_blank"
              className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-blue-500"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hemantha-rayudu-kavali-2947bb231"
              target="_blank"
              className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-blue-500"
            >
              LinkedIn
            </a>

        </div>

      </motion.div>

    </section>
  );
}