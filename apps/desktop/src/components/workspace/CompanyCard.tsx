import type { Company, Thesis } from "@vc-ide/shared";

import { formatCurrency } from "../../lib/utils";

export function CompanyCard({
  company,
  thesis,
}: {
  company: Company;
  thesis?: Thesis | null;
}) {
  return (
    <section className="data-card">
      <div className="split-inline">
        <div>
          <div className="muted">Company</div>
          <strong>{company.name}</strong>
        </div>
        <span className="badge">{company.stage ?? "Unstaged"}</span>
      </div>
      <div className="card-grid" style={{ marginTop: 12 }}>
        <div>
          <div className="muted">Sector</div>
          <div>{company.sector ?? "—"}</div>
        </div>
