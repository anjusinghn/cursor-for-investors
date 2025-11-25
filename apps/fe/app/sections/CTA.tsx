"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 md:py-40 px-8 md:px-28">
      <motion.div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-[600px] h-[400px] rounded-full bg-white/[0.03] blur-[120px]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-5xl font-medium tracking-[-1.5px] mb-4">
          Built for{" "}
          <span className="font-serif italic font-normal">early-stage</span> VC
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-md">
          From founder call to IC memo in one workspace.
        </p>

