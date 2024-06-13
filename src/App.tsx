import Router from "~/router";
import Header from "~/components/Header";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
