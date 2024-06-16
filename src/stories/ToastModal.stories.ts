import type { Meta, StoryObj } from "@storybook/react";
import { ToastModal } from "~/components/ToastModal";

const meta = {
  title: "Components/ToastModal",
  component: ToastModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { children: "content changed" },
} satisfies Meta<typeof ToastModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
