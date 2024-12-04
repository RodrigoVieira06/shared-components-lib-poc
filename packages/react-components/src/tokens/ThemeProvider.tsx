import React, { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import { CustomTokenType } from '../types/customTokenType';
import { designTokens, IDesignTokens } from './tokens';

interface ThemeProps {
  children: ReactNode;
  token?: Partial<CustomTokenType<AliasToken, IDesignTokens>>;
}

const ThemeProvider: React.FC<ThemeProps> = ({ children, token }) => {

  const customToken: Partial<AliasToken> = {};

  if (token) {
    (Object.keys(token) as Array<keyof typeof token>).forEach((key) => {
      const designTokenKey = token[key];
      if (
        designTokenKey &&
        designTokens[designTokenKey as keyof IDesignTokens]
      ) {
        const value = designTokens[designTokenKey as keyof IDesignTokens];


        if (typeof value === 'string') {
          customToken[key as keyof AliasToken] = value as never;
        }
      }
    });
  }

  return (
    <ConfigProvider theme={{ token: customToken }}>
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
