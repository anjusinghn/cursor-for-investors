import {
  BarChart3,
  Briefcase,
  Calendar,
  Clock,
  Eye,
  Lightbulb,
  Users,
} from "lucide-react";

import {
  useLayout,
  type NavSection,
  type TabKind,
} from "../../contexts/LayoutContext";
import { useWorkspace } from "../../contexts/WorkspaceContext";
import { SidebarSection } from "./SidebarSection";

type NavItem = {
  key: NavSection;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  kind: TabKind;
};

const NAV_ITEMS: NavItem[] = [
  { key: "pipeline", label: "Pipeline", icon: BarChart3, kind: "pipeline" },
  { key: "deals", label: "Deals", icon: Briefcase, kind: "deal" },
  { key: "theses", label: "Thesis", icon: Lightbulb, kind: "thesis" },
  { key: "people", label: "People", icon: Users, kind: "person" },
  { key: "meetings", label: "Meetings", icon: Calendar, kind: "meeting" },
];

const WATCHLISTS = ["AI Infrastructure", "Climate Tech", "Developer Tools"];

export function Sidebar() {
  const { activeSection, openTab, toggleSidebar } = useLayout();
  const { recentItems } = useWorkspace();

  return (
    <aside className="sidebar-card liquid-glass">
      <div className="sidebar-header">
        <div>
          <div
            className="muted"
            style={{
              fontSize: 10,
              letterSpacing: "0.06em",
