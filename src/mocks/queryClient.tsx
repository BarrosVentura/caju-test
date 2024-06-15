import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import toast from "react-hot-toast";

export const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError(_, query) {
      if (query?.meta?.error) {
        toast.error(query.meta.error as string);
      }
    },
    onSuccess(_, query) {
      if (query?.meta?.success) {
        toast.success(query.meta.success as string);
      }
    },
  }),
});

export function withMockQueryClient(element: ReactNode | JSX.Element) {
  return (
    <QueryClientProvider client={mockQueryClient}>
      {element}
    </QueryClientProvider>
  );
}
