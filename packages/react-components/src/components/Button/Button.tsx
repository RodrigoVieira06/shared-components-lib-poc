import React from 'react';
import { Button, ButtonProps as AntButtonProps } from 'antd';

export interface MainButtonProps extends AntButtonProps {
  iconPosition?: 'start' | 'end';
}

export const MainButton: React.FC<MainButtonProps> = ({
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
