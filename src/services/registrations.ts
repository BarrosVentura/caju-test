import { api } from "~/lib/axios";
import { Status } from "~/types/enums";

export function getRegistrations(aCPF: string | null) {
  return api.get<Registration[]>("/registrations", {
    params: {
      cpf: aCPF,
    },
  });
}

export function updateRegistrationStatus({
  registration,
  status,
}: {
  registration: Registration;
  status: keyof typeof Status;
}) {
  return api.put(
    `/registrations/${registration.id}`,
    {
      ...registration,
      status,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export function deleteRegistration(id: string) {
  return api.delete(`/registrations/${id}`);
}

interface Registration {
  admissionDate: string;
  email: string;
  employeeName: string;
  status: keyof typeof Status;
  cpf: string;
  id: string;
}
