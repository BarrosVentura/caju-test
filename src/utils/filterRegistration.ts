import { Registration } from "~/pages/Dashboard/components/Columns";

export function filterRegistration(
  registrations: Registration[],
  status: string
) {
  return registrations.filter((registration) => registration.status == status);
}
