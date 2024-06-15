import { handlers } from "~/mocks/server";
import { setupServer } from "msw/node";

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
