import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
 
import { Button as Button } from './Button';
 
const meta: Meta<typeof Button> = {
  title: 'Componets/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const PrimaryButton: Story = {
  render: () => <Button name="Test Value" />,
};