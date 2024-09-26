import { ComponentProps } from 'react';

import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string
}

const meta: Meta<StoryProps> = {
  args: {
    onClick: fn()
  },
  component: Button,
  argTypes: {
    fullWidth: {
      control: {
        type: "boolean",
      },
      table: {
        type: { summary: "false" },
        defaultValue: { summary: "false" },
        description: "Whether the button should take up the full width of its container"
      },
      default: false,
      description: "Whether the button should take up the full width of its container"
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary"],
      table: {
        type: { summary: "primary" },
        description: "The button's visual style",
        defaultValue: { summary: "primary" },
      }
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
      table: {
        type: { summary: "md" },
        description: "The button's size",
        defaultValue: { summary: "md" },
      },
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonText: "button",
    variant: "primary",
    fullWidth: false
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Secondary: Story = {
  args: {
    buttonText: "button",
    variant: "secondary",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Small: Story = {
  args: {
    size: "sm",
    buttonText: "button",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Medium: Story = {
  args: {
    size: "md",
    buttonText: "button",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Large: Story = {
  args: {
    size: "lg",
    buttonText: "button",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

