import { QueryClient } from "@tanstack/react-query";

export const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
