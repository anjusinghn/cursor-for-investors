import { ThesisForm } from "../components/workspace/ThesisForm";
import { useTheses, useUpdateThesis } from "../hooks/useTheses";
import { useWorkspace } from "../contexts/WorkspaceContext";

export function ThesisEditor({ thesisId }: { thesisId?: string }) {
  const thesesQuery = useTheses();
  const thesis = thesesQuery.data?.find((item) => item.id === thesisId) ?? thesesQuery.data?.[0];
  const updateThesis = useUpdateThesis(thesis?.id ?? "");
  const { addRecentItem } = useWorkspace();

  if (thesesQuery.isLoading) {
    return <div className="empty-state">Loading thesis settings…</div>;
  }

  if (!thesis) {
    return <div className="empty-state">No thesis records available.</div>;
  }

  return (
    <div className="list-stack">
      <section className="data-card">
        <div className="split-inline">
          <div>
