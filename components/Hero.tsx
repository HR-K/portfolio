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
          Assistant System Engineer @ TCS
        </p>

        <h1 className="text-6xl font-bold md:text-8xl">
          Hemantha Rayudu
        </h1>

        <h2 className="mt-4 text-2xl text-zinc-400 md:text-4xl">
          Cloud & Infrastructure Engineer
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-zinc-500">
          Linux • Networking • Cloud • Security • Automation
        </p>

      </motion.div>

    </section>
  );
}