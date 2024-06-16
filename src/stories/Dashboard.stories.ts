import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/components/Buttons";
import {
  PageDecoratorQueries,
  PageDecoratorRouterDom,
} from "~/decorators/decorator";
import { DashboardPage } from "~/pages/Dashboard";

const meta = {
  title: "Dashboard/Page",
  component: DashboardPage,
  decorators: [PageDecoratorQueries, PageDecoratorRouterDom],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button.Default>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
