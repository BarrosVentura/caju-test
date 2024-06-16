import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TextField } from "~/components/TextField";

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    error: {
      control: "text",
    },
  },
  args: { onChange: fn(), label: "What is your name?" },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: "Name is invalid",
  },
};
