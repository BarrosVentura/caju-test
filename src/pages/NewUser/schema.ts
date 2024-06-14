import { z } from "zod";
import { cpf } from "~/utils/cpf";

export type RegistrationSchema = z.infer<typeof registrationSchema>;

export const registrationSchema = z.object({
  nome: z
    .string({
      required_error: "Nome é obrigatório",
    })
    .min(2, {
      message: "Tamanho de nome inválido",
    })
    .refine((value) => value[0]?.match(/\D/), {
      message: "Nome não pode começar com número",
    })
    .refine((value) => value.includes(" "), {
      message: "Nome precisa ter pelo menos 2 palavras",
    }),
  email: z
    .string({
      required_error: "E-mail é obrigatório",
    })
    .email({
      message: "Insira um email válido",
    }),
  cpf: z
    .string({
      required_error: "CPF é obrigatório",
    })
    .refine((value) => cpf.validate(value), {
      message: "CPF precisa ser válido",
    }),
  admissionDate: z
    .string()
    .date("Adicione uma data válida")
    .transform((value) =>
      new Date(value).toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      })
    ),
});
