import Router from "~/router";
import Header from "~/components/Header";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />

      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </QueryClientProvider>
  );
}
