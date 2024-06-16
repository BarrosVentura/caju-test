import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/components/Buttons";
import {
  PageDecoratorPadding,
  PageDecoratorQueries,
  PageDecoratorRouterDom,
} from "~/decorators/decorator";
import { SearchBar } from "~/pages/Dashboard/components/Searchbar";

const meta = {
  title: "Dashboard/Components/SearchBar",
  component: SearchBar,
  decorators: [
    PageDecoratorQueries,
    PageDecoratorRouterDom,
    PageDecoratorPadding,
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button.Default>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
