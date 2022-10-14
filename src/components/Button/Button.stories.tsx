import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {
    children: {
      control: false,
    },
    asChild: {
      control: false,
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
