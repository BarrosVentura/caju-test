import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

export function withMockRouterDom(element: ReactNode, path?: string) {
  return <MemoryRouter initialEntries={[`${path}`]}>{element}</MemoryRouter>;
}
