import { filterRegistration } from "~/utils/filterRegistration";
import { ColumnContent, Column, Container, TitleColumn } from "./styles";
import { RegistrationCard } from "../RegistrationCard";

const allColumns = [
  { status: "REVIEW", title: "Pronto para revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
];

type Props = {
  registrations?: Registration[];
};
export function Columns({ registrations }: Props) {
  return (
    <Container>
      {allColumns.map(({ status, title }) => (
        <Column status={status} key={title}>
          <TitleColumn status={status}>{title}</TitleColumn>
          <ColumnContent>
            {filterRegistration(registrations, status)?.map((registration) => (
              <RegistrationCard data={registration} key={registration.id} />
            ))}
          </ColumnContent>
        </Column>
      ))}
    </Container>
  );
}

export interface Registration {
  admissionDate: string;
  email: string;
  employeeName: string;
  status: "APPROVED" | "REVIEW" | "REPROVED";
  cpf: string;
  id: string;
}
