import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton } from "~/components/Buttons/IconButton";
import { Button } from "~/components/Buttons";
import { Actions, Container } from "./styles";
import { routes } from "~/router/routes";
import { TextField } from "~/components/TextField";

export function SearchBar() {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <Container>
      <TextField placeholder="Digite um CPF válido" />
      <Actions>
        <IconButton aria-label="refetch">
          <HiRefresh />
        </IconButton>
        <Button.Default onClick={() => goToNewAdmissionPage()}>
          Nova Admissão
        </Button.Default>
      </Actions>
    </Container>
  );
}
