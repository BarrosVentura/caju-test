import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/components/Buttons";
import { Loading } from "~/components/Loading";

const meta = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button.Default>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
