import { useMemo, useState } from "react";
import type { DealStage, DealWithCompany } from "@vc-ide/shared";

import { usePipeline } from "../hooks/usePipeline";
import { useLayout } from "../contexts/LayoutContext";
import { useWorkspace } from "../contexts/WorkspaceContext";
import { formatRelativeDate, groupDealsByStage, stageOrder } from "../lib/utils";
import { ConfidenceBadge } from "../components/workspace/ConfidenceBadge";
import { StageBadge } from "../components/workspace/StageBadge";
import { StageColumn } from "../components/workspace/StageColumn";

type SortMode = "activity" | "confidence" | "name";

export function PipelineView() {
  const [stageFilter, setStageFilter] = useState<DealStage | "all">("all");
  const [sortBy, setSortBy] = useState<SortMode>("activity");
  const [viewMode, setViewMode] = useState<"table" | "kanban">("table");
  const { deals, summary } = usePipeline();
  const { openTab } = useLayout();
  const { addRecentItem } = useWorkspace();

  const filteredDeals = useMemo(() => {
    const source = deals.data ?? [];
    const next = source.filter((deal) => (stageFilter === "all" ? true : deal.stage === stageFilter));

    return next.sort((left, right) => {
      if (sortBy === "confidence") {
        return (right.confidence ?? 0) - (left.confidence ?? 0);
      }

      if (sortBy === "name") {
        return left.company.name.localeCompare(right.company.name);
      }

      return right.lastActivityAt.localeCompare(left.lastActivityAt);
    });
  }, [deals.data, sortBy, stageFilter]);

  const openDeal = (deal: DealWithCompany) => {
    openTab({
      id: `deal:${deal.id}`,
      title: deal.company.name,
      kind: "deal",
      section: "deals",
      payload: { dealId: deal.id },
    });
    addRecentItem({
      id: `deal:${deal.id}`,
      title: deal.company.name,
      kind: "deal",
    });
  };

