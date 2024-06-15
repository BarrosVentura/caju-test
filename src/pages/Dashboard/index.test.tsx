import { render, screen, waitFor } from "@testing-library/react";
import { withMockQueryClient } from "~/mocks/queryClient";
import { withMockRouterDom } from "~/mocks/routerDom";
import { DashboardPage } from ".";

describe("Dashboard", () => {
  it("should render correctly", async () => {
    render(withMockQueryClient(withMockRouterDom(<DashboardPage />)));
    const user = await waitFor(() => screen.getByText(/luiz filho/i));
    expect(user).toBeDefined();
  });
});
