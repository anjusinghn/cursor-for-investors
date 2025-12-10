import { useEffect } from "react";

import { PersonCard } from "../components/workspace/PersonCard";
import { usePeople } from "../hooks/usePeople";
import { useWorkspace } from "../contexts/WorkspaceContext";

export function PersonView({ personId }: { personId?: string }) {
  const peopleQuery = usePeople();
  const person = peopleQuery.data?.find((entry) => entry.id === personId) ?? peopleQuery.data?.[0];
  const { addRecentItem } = useWorkspace();

  useEffect(() => {
    if (!person) {
      return;
    }

    addRecentItem({
      id: `person:${person.id}`,
      title: person.name,
      kind: "person",
    });
  }, [addRecentItem, person]);

  if (peopleQuery.isLoading) {
