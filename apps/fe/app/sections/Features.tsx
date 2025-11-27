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
