import React, { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { AliasToken } from 'antd/es/theme/internal';
import { CutstomTokenType } from '../types/tokens';
import { designTokens } from './tokens';

interface ThemeProps {
  children: ReactNode;
  token?: Partial<CutstomTokenType<AliasToken>>;
}

const ThemeProvider: React.FC<ThemeProps> = ({ children, token }) => {
  let customToken: Partial<AliasToken> = {};

  if (token) {
    Object.keys(token).forEach((key: string) => {
      // customToken[key as keyof AliasToken] = designTokens[key as keyof typeof designTokens];
    });
  }

  return (
    <ConfigProvider theme={{ token: customToken }}>
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
