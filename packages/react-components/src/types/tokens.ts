import { IDesignTokens } from '../tokens/tokens';


export type CutstomTokenType<T> = {
  [Key in keyof T]: T[Key] extends object
  ? { keys: CutstomTokenType<T[Key]> }
  : keyof IDesignTokens;
};
