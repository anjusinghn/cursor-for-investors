import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CreatePersonInput, UpdatePersonInput } from "@vc-ide/shared";

import { api, queryKeys } from "../lib/api";

export function usePeople() {
  return useQuery({
    queryKey: queryKeys.people,
    queryFn: api.people.list,
  });
}

export function usePerson(id?: string) {
  return useQuery({
    queryKey: queryKeys.person(id ?? "unknown"),
    queryFn: () => api.people.get(id!),
    enabled: Boolean(id),
  });
}
