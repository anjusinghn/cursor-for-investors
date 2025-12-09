import type { LucideIcon } from "lucide-react";

type CommandItemProps = {
  icon?: LucideIcon;
  label: string;
  shortcut?: string;
  onSelect: () => void;
};

export function CommandItem({
  icon: Icon,
  label,
  shortcut,
  onSelect,
}: CommandItemProps) {
  return (
    <button className="command-item" onClick={onSelect} type="button">
      {Icon ? (
        <Icon size={14} style={{ flexShrink: 0, opacity: 0.65 }} />
      ) : null}
