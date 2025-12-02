import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function SidebarSection({
  defaultOpen = true,
  title,
  children,
}: {
  defaultOpen?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="sidebar-section">
      <button
        className="sidebar-section-header"
