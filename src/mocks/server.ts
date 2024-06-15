import { rest } from "msw";

const BASE_URL = "http://localhost:3000";

const defaultResponse = [
  {
    admissionDate: "22/10/2023",
    email: "luiz@caju.com.br",
    employeeName: "Luiz Filho",
    status: "REPROVED",
    cpf: "56642105087",
    id: "3",
  },
  {
    id: "1",
    admissionDate: "22/10/2023",
    email: "filipe@caju.com.br",
    employeeName: "Filipe Marins",
    status: "REVIEW",
    cpf: "78502270001",
  },
];

export const handlers = [
  rest.get(`${BASE_URL}/registrations`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(defaultResponse));
  }),
];
