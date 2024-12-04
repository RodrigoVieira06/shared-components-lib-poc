import { AliasToken } from 'antd/es/theme/internal';
import { IDesignTokens } from '../tokens/tokens';


export type CustomTokenType<T extends Partial<AliasToken>, U extends Partial<IDesignTokens>> = {
  [K in keyof T]: keyof U;
};
