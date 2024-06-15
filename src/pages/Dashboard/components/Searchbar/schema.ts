import { z } from "zod";
import { cpf } from "~/utils/cpf";

export type CpfSchema = z.infer<typeof cpfSchema>;

export const cpfSchema = z.object({
  cpf: z
    .string()
    .transform((content) => cpf.removeMask(content))
    .refine((value) => cpf.validate(value), {
      message: "CPF precisa ser válido",
    }),
});
