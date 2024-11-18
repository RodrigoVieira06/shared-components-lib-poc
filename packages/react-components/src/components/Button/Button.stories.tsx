import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { MainButton } from './Button';
import { PlusOutlined } from '@ant-design/icons';

const meta: Meta<typeof MainButton> = {
  title: 'Components/Button',
  component: MainButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto exibido no botão.',
      defaultValue: 'Test Value',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'link', 'text'],
      description: 'Tipo do botão.',
      defaultValue: 'default',
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
    disabled: {
      control: 'boolean',
      description: 'Desativa o botão.',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      description: 'Exibe o estado de carregamento.',
      defaultValue: false,
    },
    danger: {
      control: 'boolean',
      description: 'Aplica o estilo de botão de perigo.',
      defaultValue: false,
    },
    block: {
      control: 'boolean',
      description: 'Ocupa toda a largura disponível.',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainButton>;

export const Playground: Story = {
  args: {
    text: 'Test Value',
    type: 'primary',
    disabled: false,
    loading: false,
    danger: false,
    block: false,
    icon: <PlusOutlined />,
    iconPosition: 'start',
  },
};

export const PrimaryButton: Story = {
  args: {
    ...Playground.args,
    type: 'primary',
    text: 'Primary Button',
  },
};

export const DangerButton: Story = {
  args: {
    ...Playground.args,
    type: 'primary',
    text: 'Danger Button',
    danger: true,
  },
};

export const WithIconAtEnd: Story = {
  args: {
    ...Playground.args,
    text: 'Icon at End',
    icon: <PlusOutlined />,
    iconPosition: 'end',
  },
};
