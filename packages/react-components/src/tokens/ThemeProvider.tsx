import React, { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { designTokens } from './tokens';
import { AliasToken } from 'antd/es/theme/internal';

interface ThemeProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const customToken: Partial<AliasToken> = {
    colorPrimary: designTokens.ColorBaseSecondary
  };

  return <ConfigProvider theme={{ token: customToken }}> {children}</ConfigProvider >;
};

export default ThemeProvider;
