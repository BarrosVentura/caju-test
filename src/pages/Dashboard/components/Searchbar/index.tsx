import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton } from "~/components/Buttons/IconButton";
import TextField from "~/components/TextField";
import routes from "~/router/routes";
import { Button } from "~/components/Buttons";
import { Actions, Container } from "./styles";

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
