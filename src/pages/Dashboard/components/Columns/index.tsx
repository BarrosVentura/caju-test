import RegistrationCard from "../RegistrationCard";
import { CollumContent, Column, Container, TitleColumn } from "./styles";

const allColumns = [
  { status: "REVIEW", title: "Pronto para revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
];

type Props = {
  registrations?: any[];
};
function Collumns({ registrations }: Props) {
  return (
    <Container>
      {allColumns.map(({ status, title }) => {
        return (
          <Column status={status} key={title}>
            <>
              <TitleColumn status={status}>{title}</TitleColumn>
              <CollumContent>
                {registrations?.map((registration) => {
                  return (
                    <RegistrationCard
                      data={registration}
                      key={registration.id}
                    />
                  );
                })}
              </CollumContent>
            </>
          </Column>
        );
      })}
    </Container>
  );
}
export default Collumns;
