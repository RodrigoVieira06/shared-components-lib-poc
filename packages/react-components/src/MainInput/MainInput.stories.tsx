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
      defaultValue: 'Teste',
    },
    size: {
      control: 'radio',
      defaultValue: 'small',
      options: ['small', 'default', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainInput>;

export const Playground: Story = {
  // args: {
  //   children: 'Botão de Teste',
  //   type: 'primary',
  //   disabled: false,
  //   loading: false,
  //   danger: false,
  //   block: false,
  //   icon: <PlusOutlined />,
  //   iconPosition: 'start',
  // },
};
