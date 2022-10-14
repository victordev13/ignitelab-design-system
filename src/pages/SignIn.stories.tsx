import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './SignIn';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  parameters: {
    msw: {
      handlers: [rest.post('/login', (_, res) => res())],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByTestId('email'), 'foo@bar.com');
    userEvent.type(canvas.getByTestId('password'), 'minhasenha');

    userEvent.click(canvas.getByTestId('loginButton'));

    await waitFor(() => {
      return expect(
        canvas.getByText('Login efetuado com sucesso')
      ).toBeInTheDocument();
    });
  },
};
