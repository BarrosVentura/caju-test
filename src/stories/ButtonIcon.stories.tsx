import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HiAnnotation } from "react-icons/hi";
import { Button } from "~/components/Buttons";

const meta = {
  title: "Components/Button",
  component: Button.Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn(), children: "Click me" },
} satisfies Meta<typeof Button.Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    children: <HiAnnotation />,
  },
};
