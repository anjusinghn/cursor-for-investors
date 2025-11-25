import { useEffect, useState } from "react";
import type { Thesis, UpdateThesisInput } from "@vc-ide/shared";

function splitValues(value: string) {
  return value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

export function ThesisForm({
  onSave,
  thesis,
}: {
  onSave: (payload: UpdateThesisInput) => Promise<void> | void;
  thesis?: Thesis;
}) {
  const [form, setForm] = useState<UpdateThesisInput>({
    name: "",
    sectors: [],
    stages: [],
    geographies: [],
    ownershipTargetMin: 0.05,
    ownershipTargetMax: 0.15,
    preferredFounderPatterns: [],
    antiPatterns: [],
    diligenceQuestions: [],
    active: true,
  });

  useEffect(() => {
    if (!thesis) {
      return;
    }

    setForm({
      name: thesis.name,
      sectors: thesis.sectors,
      stages: thesis.stages,
      geographies: thesis.geographies,
      ownershipTargetMin: thesis.ownershipTargetMin ?? undefined,
      ownershipTargetMax: thesis.ownershipTargetMax ?? undefined,
      preferredFounderPatterns: thesis.preferredFounderPatterns,
      antiPatterns: thesis.antiPatterns,
      diligenceQuestions: thesis.diligenceQuestions,
      active: thesis.active,
    });
  }, [thesis]);

  return (
    <form
      className="form-grid"
      onSubmit={async (event) => {
