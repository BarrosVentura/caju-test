import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
});

export function withMockQueryClient(element: ReactNode | JSX.Element) {
  return (
    <QueryClientProvider client={mockQueryClient}>
      {element}
    </QueryClientProvider>
  );
}
