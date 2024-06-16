import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "~/components/Buttons";

const meta = {
  title: "Components/ButtonSmall",
  component: Button.Small,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bgcolor: { control: "color" },
    color: { control: "color" },
  },
  args: { onClick: fn(), children: "Click me" },
} satisfies Meta<typeof Button.Small>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};
