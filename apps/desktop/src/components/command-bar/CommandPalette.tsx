import { useEffect } from "react";
import {
  BarChart3,
  Briefcase,
  Calendar,
  Clock,
  Lightbulb,
  Plus,
  Users,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem as CmdkItem,
  CommandList,
} from "cmdk";

import {
  useLayout,
  type NavSection,
  type TabKind,
} from "../../contexts/LayoutContext";
import { useWorkspace } from "../../contexts/WorkspaceContext";

type NavEntry = {
  label: string;
  section: NavSection;
  kind: TabKind;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  shortcut?: string;
};

const NAV_ENTRIES: NavEntry[] = [
  {
    label: "Go to Pipeline",
    section: "pipeline",
    kind: "pipeline",
    icon: BarChart3,
    shortcut: "P",
  },
  {
    label: "Go to Deals",
    section: "deals",
    kind: "deal",
    icon: Briefcase,
    shortcut: "D",
  },
