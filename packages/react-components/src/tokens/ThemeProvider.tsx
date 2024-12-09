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
  const customToken: Partial<AliasToken> = getCustomToken(token);

  return (
    <ConfigProvider theme={{ token: customToken }}>{children}</ConfigProvider>
  );
};

const getCustomToken = (
  token?: Partial<CustomTokenType<AliasToken, IDesignTokens>>,
): Partial<AliasToken> => {
  const customToken: Partial<AliasToken> = {};

  if (token) {
    (Object.keys(token) as Array<keyof typeof token>).forEach((key) => {
      const designTokenKey = token[key];
      if (
        designTokenKey &&
        designTokens[designTokenKey as keyof IDesignTokens]
      ) {
        const value = designTokens[designTokenKey as keyof IDesignTokens];

        customToken[key as keyof Partial<AliasToken>] = value as never;
      } else if (designTokenKey) {
        const value = designTokenKey;

        customToken[key as keyof Partial<AliasToken>] = value as never;
      }
    });
  }

  return customToken;
};

export default ThemeProvider;
