import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

export function withMockRouterDom(element: ReactNode) {
  return <MemoryRouter initialEntries={["/dashboard"]}>{element}</MemoryRouter>;
}
