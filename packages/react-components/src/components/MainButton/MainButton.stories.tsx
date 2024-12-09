import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MainButton } from './MainButton';
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
      defaultValue: 'Texto do botão',
    },
    iconPosition: {
      control: 'radio',
      options: ['start', 'end'],
      defaultValue: 'start',
    },
    icon: {
      control: false,
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'link', 'text'],
      defaultValue: 'primary',
    },
    token: {
      control: 'object',
    },
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
