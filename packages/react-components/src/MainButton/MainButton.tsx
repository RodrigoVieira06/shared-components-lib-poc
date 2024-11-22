import React from 'react';
import { Button, ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends AntButtonProps {
  iconPosition?: 'start' | 'end';
}

const MainButton: React.FC<ButtonProps> = ({
  children,
  icon,
  iconPosition = 'start',
  ...restProps
}) => {
  return (
    <Button {...restProps}>
      {icon && iconPosition === 'start' && (
        <span style={{ marginRight: 8 }}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'end' && (
        <span style={{ marginLeft: 8 }}>{icon}</span>
      )}
    </Button>
  );
};

export default MainButton;