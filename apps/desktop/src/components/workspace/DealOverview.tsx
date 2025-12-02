import type { DealFull } from "@vc-ide/shared";

import { ConfidenceBadge } from "./ConfidenceBadge";
import { CompanyCard } from "./CompanyCard";
import { StageBadge } from "./StageBadge";

export function DealOverview({ deal }: { deal: DealFull }) {
  return (
    <div className="detail-grid">
      <CompanyCard company={deal.company} thesis={deal.thesis} />
      <section className="data-card">
        <div className="split-inline">
          <div>
            <div className="muted">Deal</div>
            <strong>{deal.company.name}</strong>
          </div>
          <StageBadge stage={deal.stage} />
        </div>
        <div className="action-row" style={{ marginTop: 12 }}>
          <ConfidenceBadge value={deal.confidence} />
