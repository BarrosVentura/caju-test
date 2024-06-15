import { rest } from "msw";

const BASE_URL = "http://localhost:3000";

const defaultResponse = [
  {
    admissionDate: "22/10/2023",
    email: "luiz@caju.com.br",
    employeeName: "Luiz Filho",
    status: "REPROVED",
    cpf: "14445124044",
    id: "3",
  },
  {
    id: "1",
    admissionDate: "22/10/2023",
    email: "filipe@caju.com.br",
    employeeName: "Filipe Marins",
    status: "REVIEW",
    cpf: "43791924079",
  },
];

export const handlers = [
  rest.get(`${BASE_URL}/registrations`, (req, res, ctx) => {
    const cpf = req.url.searchParams.get("cpf");

    if (cpf) {
      const filteredResponse = defaultResponse.filter(
        (item) => item.cpf == cpf
      );
      console.log({ filteredResponse });
      return res(ctx.status(200), ctx.json(filteredResponse));
    }

    return res(ctx.status(200), ctx.json(defaultResponse));
  }),
  rest.put(`${BASE_URL}/registrations`, (_, res, ctx) => {
    return res(ctx.status(200));
  }),
];
