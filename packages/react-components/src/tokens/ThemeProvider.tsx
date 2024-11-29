import React, { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { designTokens } from './tokens';
import { AliasToken } from 'antd/es/theme/internal';

interface ThemeProps {
  children: ReactNode;
  token?: Partial<AliasToken>
}

const ThemeProvider: React.FC<ThemeProps> = ({ children, token }) => {
  const customToken: Partial<AliasToken> = {
    colorPrimary: designTokens.ColorBasePrimary
  };

  return <ConfigProvider theme={{ token: customToken }}> {children}</ConfigProvider >;
};

export default ThemeProvider;
