import type { Meta, StoryObj } from '@storybook/react';
import { MainInput } from './MainInput';

const meta: Meta<typeof MainInput> = {
  title: 'Components/Input',
  component: MainInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'radio',
      options: ['small', 'default', 'large'],
    },
    type: {
      control: 'select',
      options: ['text', 'number'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainInput>;

export const Playground: Story = {
  args: {
    placeholder: 'Digite um valor',
    size: 'small',
    type: 'text',
  },
};
