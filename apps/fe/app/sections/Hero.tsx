"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/app/components/Navbar";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        muted
        loop
        playsInline
        autoPlay
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
      />

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <motion.div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(circle, rgba(120, 119, 198, 0.15), rgba(120, 119, 198, 0.05) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-[3]">
        <Navbar />

        <motion.div
          style={{ y: heroTextY, opacity: heroTextOpacity }}
          className="flex flex-col items-center text-center mt-16 md:mt-24 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="liquid-glass rounded-lg px-3 py-2 mb-6 flex items-center gap-2"
          >
            <span className="bg-white text-black rounded-md text-sm font-medium px-2 py-0.5">
              Investor IDE
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Cursor for investors — describe the outcome, not the workflow
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
