export type CustomTokenType<T, U> = {
  [K in keyof T]: keyof U;
};
