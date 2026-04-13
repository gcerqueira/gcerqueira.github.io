// CUI Design System — Typography Tokens
// Font: Albert Sans

export const fontFamily = "'Albert Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export const fontSize = {
  xs: '12px',    // font_size_01
  sm: '13px',    // font_size_02
  base: '14px',  // font_size_03
  md: '16px',    // font_size_04
  lg: '18px',    // font_size_045
  xl: '21px',    // font_size_05
  '2xl': '24px', // font_size_06
  '3xl': '32px', // font_size_07
  '4xl': '40px', // font_size_08
} as const;

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

export const textStyles = {
  titlePrimary: {
    fontFamily,
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.medium,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  titleSectionPrimary: {
    fontFamily,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.medium,
    lineHeight: 'normal',
    letterSpacing: '-0.02em',
  },
  titleSectionSecondary: {
    fontFamily,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.medium,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  titleSectionTertiary: {
    fontFamily,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.medium,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  titleSectionSmallest: {
    fontFamily,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  bodyPrimaryRegular: {
    fontFamily,
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  bodyPrimaryMedium: {
    fontFamily,
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  bodyPrimaryBold: {
    fontFamily,
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  bodySecondaryRegular: {
    fontFamily,
    fontSize: fontSize.base,
    fontWeight: fontWeight.regular,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  bodySecondaryMedium: {
    fontFamily,
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  bodySecondaryBold: {
    fontFamily,
    fontSize: fontSize.base,
    fontWeight: fontWeight.bold,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  disclaimer: {
    fontFamily,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  actionCTA: {
    fontFamily,
    fontSize: fontSize.base,
    fontWeight: fontWeight.bold,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
  actionLabel: {
    fontFamily,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
    lineHeight: 'normal',
    letterSpacing: '0',
  },
} as const;
