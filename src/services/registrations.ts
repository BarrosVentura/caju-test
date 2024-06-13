import { api } from "~/lib/axios";

export function getRegistrations(aCPF: string | null) {
  return api.get<Registration[]>("/registrations", {
    params: {
      cpf: aCPF,
    },
  });
}

interface Registration {
  admissionDate: string;
  email: string;
  employeeName: string;
  status: "APPROVED" | "REVIEW" | "REPROVED";
  cpf: string;
  id: string;
}
