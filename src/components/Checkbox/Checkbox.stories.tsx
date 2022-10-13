import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <div className='flex gap-2 items-center'>
          {Story()}
          <Text>Aceito os Termos de Uso</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
