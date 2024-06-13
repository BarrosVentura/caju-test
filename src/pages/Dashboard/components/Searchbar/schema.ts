import { z } from "zod";

export type CpfSchema = z.infer<typeof cpfSchema>;

export const cpfSchema = z.object({
  cpf: z.string(),
});
