import React from 'react';
import { Button, ButtonProps as AntButtonProps } from 'antd';
import ThemeProvider from '../../tokens/ThemeProvider';
import { CutstomTokenType } from '../../types/tokens';
import { AliasToken } from 'antd/es/theme/internal';
export interface ButtonProps extends AntButtonProps {
  iconPosition?: 'start' | 'end';
  token?: Partial<CutstomTokenType<AliasToken>>;
}

export const MainButton: React.FC<ButtonProps> = ({
  children,
  icon,
  iconPosition = 'start',
  token,
  ...restProps
}) => {
  return (
    <ThemeProvider token={token}>
      <Button {...restProps} className={'button'}>
        {icon && iconPosition === 'start' && (
          <span style={{ marginRight: 8 }}>{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'end' && (
          <span style={{ marginLeft: 8 }}>{icon}</span>
        )}
      </Button>
    </ThemeProvider>
  );
};
