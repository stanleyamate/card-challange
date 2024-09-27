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
  tags: ["autodocs"],
  argTypes: {
    fullWidth: {
      control: {
        type: "boolean",
      },
      table: {
        type: { summary: "false | true" },
        defaultValue: { summary: "false " },
      },
      description: "Whether the button should take up the full width of its container"
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary"],
      table: {
        type: { summary: "primary | secondary" },
        defaultValue: { summary: "primary" },
      },
      description: "The button's visual style",
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      description: "The button's size",
    },
    children: {
      control: {
        type: "text",
      },
      description: "The text inside the button",
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

