"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Layers, Mic, Users, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    icon: Terminal,
    title: "Command Bar",
    description:
      "Describe the outcome, not the workflow. 'Find seed-stage AI security startups with repeat founders and a warm path.'",
  },
  {
    icon: Code,
    title: "Thesis-as-Code",
    description:
      "Encode sectors, stages, ownership targets, and anti-thesis patterns. The system runs your thesis continuously.",
  },
  {
    icon: Layers,
    title: "Deal Workspace",
    description:
      "Notes, emails, transcripts, comps, and memos in one place. Auto-generated briefs, competitor maps, and relationship graphs.",
  },
  {
    icon: Mic,
    title: "Meeting to Memo",
    description:
      "Transcribe founder calls. Extract metrics, risks, and asks. Draft follow-ups, update CRM, generate partner-ready memos.",
  },
  {
    icon: Users,
    title: "Relationship Intelligence",
    description:
      "Warm intro paths, network overlap, relationship freshness scores. Your firm's network becomes a searchable asset.",
  },
  {
    icon: ShieldCheck,
    title: "Diligence Copilot",
    description:
      "Summarize data rooms, flag inconsistencies, build competitor grids. Every claim links back to a source.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      ref={sectionRef}
      className="px-8 md:px-28 py-24 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
