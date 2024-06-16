import type { Meta, StoryObj } from "@storybook/react";
import { PageDecoratorQueries } from "~/decorators/decorator";
import { Columns, Registration } from "~/pages/Dashboard/components/Columns";

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
] satisfies Registration[];

const meta = {
  title: "Dashboard/Components/Columns",
  component: Columns,
  decorators: [PageDecoratorQueries],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { registrations: defaultResponse },
} satisfies Meta<typeof Columns>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
