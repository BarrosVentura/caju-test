import { HiOutlineArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { Button } from "~/components/Buttons";
import { Card, Container } from "./styles";
import { routes } from "~/router/routes";
import { TextField } from "~/components/TextField";

export function NewUserPage() {
  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  return (
    <Container>
      <Card>
        <Button.Icon onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </Button.Icon>
        <TextField placeholder="Nome" label="Nome" />
        <TextField placeholder="Email" label="Email" type="email" />
        <TextField placeholder="CPF" label="CPF" />
        <TextField label="Data de admissão" type="date" />
        <Button.Default onClick={() => {}}>Cadastrar</Button.Default>
      </Card>
    </Container>
  );
}
