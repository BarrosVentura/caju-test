import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Decorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

export const PageDecoratorQueries: Decorator = (Story) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  );
};

export const PageDecoratorRouterDom: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};

export const PageDecoratorPadding: Decorator = (Story) => {
  return (
    <div style={{ padding: "40px" }}>
      <Story />
    </div>
  );
};
