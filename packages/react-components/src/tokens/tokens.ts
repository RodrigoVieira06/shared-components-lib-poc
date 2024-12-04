import * as tokens from '@testing-components/design-tokens/dist/js/index';

export interface IDesignTokens {
  ColorBasePrimary: string;
  ColorBaseSecondary: string;
  ColorText: string;
  ColorBackground: string;
  FontFamilyBase: string;
  FontFamilyCode: string;
  SizeTextBase: string;
  SizeTextSmall: string;
  SizeTextMedium: string;
  SizeTextLarge: string;
  SpacingSmall: string;
  SpacingMedium: string;
  SpacingLarge: string;
};

export const designTokens: IDesignTokens = {
  ColorBasePrimary: tokens.ColorBasePrimary,
  ColorBaseSecondary: tokens.ColorBaseSecondary,
  ColorText: tokens.ColorText,
  ColorBackground: tokens.ColorBackground,
  FontFamilyBase: tokens.FontFamilyBase,
  FontFamilyCode: tokens.FontFamilyCode,
  SizeTextBase: tokens.SizeTextBase,
  SizeTextSmall: tokens.SizeTextSmall,
  SizeTextMedium: tokens.SizeTextMedium,
  SizeTextLarge: tokens.SizeTextLarge,
  SpacingSmall: tokens.SpacingSmall,
  SpacingMedium: tokens.SpacingMedium,
  SpacingLarge: tokens.SpacingLarge,
};
