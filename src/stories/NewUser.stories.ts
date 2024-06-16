import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/components/Buttons";
import {
  PageDecoratorQueries,
  PageDecoratorRouterDom,
} from "~/decorators/decorator";
import { NewUserPage } from "~/pages/NewUser";

const meta = {
  title: "NewUser/Page",
  component: NewUserPage,
  decorators: [PageDecoratorQueries, PageDecoratorRouterDom],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button.Default>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
