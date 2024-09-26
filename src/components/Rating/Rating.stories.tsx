import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Rating from '.';

type StoryProps = ComponentProps<typeof Rating>

const meta: Meta<StoryProps> = {
  component: Rating,
  argTypes: {
    stars: {
      control: {
        type: "select",
      },
      options: [1, 2, 3, 4, 5],
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },

      },
      default: 5,
      description: "Whether the button should take up the full width of its container"
    },
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Stars: Story = {
  args: {
    stars: 5
  }
};


