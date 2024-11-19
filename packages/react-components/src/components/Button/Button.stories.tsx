import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MainButton } from './Button';
import { PlusOutlined } from '@ant-design/icons';

const meta: Meta<typeof MainButton> = {
  title: 'Components/Button',
  component: MainButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo exibido no botão.',
      defaultValue: 'Texto do botão',
    },
    iconPosition: {
      control: 'radio',
      options: ['start', 'end'],
      description: 'Posição do ícone no botão.',
      defaultValue: 'start',
    },
    icon: {
      control: false,
      description: 'Ícone exibido no botão.',
    },
    type: {
      control: 'select',
      options: ["default", "primary", "dashed", "link", "text"],
      defaultValue: 'primary'
    }
  },
};

export default meta;
type Story = StoryObj<typeof MainButton>;

export const Playground: Story = {
  args: {
    children: 'Botão de Teste',
    type: 'primary',
    disabled: false,
    loading: false,
    danger: false,
    block: false,
    icon: <PlusOutlined />,
    iconPosition: 'start',
  },
};
