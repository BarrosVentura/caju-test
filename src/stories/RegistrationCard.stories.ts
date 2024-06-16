import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/components/Buttons";
import { PageDecoratorQueries } from "~/decorators/decorator";
import { RegistrationCard } from "~/pages/Dashboard/components/RegistrationCard";

const defaultResponse = [
  {
    admissionDate: "22/10/2023",
    email: "luiz@caju.com.br",
    employeeName: "Luiz Filho",
    status: "REPROVED",
    cpf: "14445124044",
    id: "3",
  },
  {
    id: "1",
    admissionDate: "22/10/2023",
    email: "filipe@caju.com.br",
    employeeName: "Filipe Marins",
    status: "REVIEW",
    cpf: "43791924079",
  },
] as const;

const meta = {
  title: "Dashboard/Components/RegistrationCard",
  component: RegistrationCard,
  decorators: [PageDecoratorQueries],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { data: defaultResponse[0] },
} satisfies Meta<typeof Button.Default>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reviewed: Story = {};
export const ToReview: Story = {
  args: {
    data: defaultResponse[1],
  },
};
