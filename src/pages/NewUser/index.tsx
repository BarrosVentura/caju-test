import { HiOutlineArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { Button } from "~/components/Buttons";
import { Card, Container } from "./styles";
import { routes } from "~/router/routes";
import { TextField } from "~/components/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, RegistrationSchema } from "./schema";
import { ChangeEvent } from "react";
import { cpf } from "~/utils/cpf";

export function NewUserPage() {
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  function handleSendNewRegistration(data: RegistrationSchema) {
    console.log({ data });
  }

  return (
    <Container>
      <Card>
        <Button.Icon onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </Button.Icon>
        <form onSubmit={handleSubmit(handleSendNewRegistration)}>
          <TextField
            placeholder="Nome"
            label="Nome"
            {...register("nome")}
            error={errors["nome"]?.message}
          />
          <TextField
            placeholder="Email"
            label="Email"
            type="email"
            {...register("email")}
            error={errors["email"]?.message}
          />
          <TextField
            placeholder="CPF"
            label="CPF"
            {...register("cpf", {
              onChange: ({ target }: ChangeEvent<HTMLInputElement>) => {
                target.value = cpf.createMask(target.value) ?? "";
              },
            })}
            error={errors["cpf"]?.message}
          />
          <TextField
            label="Data de admissão"
            type="date"
            {...register("admissionDate")}
            error={errors["admissionDate"]?.message}
          />
          <Button.Default onClick={() => {}}>Cadastrar</Button.Default>
        </form>
      </Card>
    </Container>
  );
}
