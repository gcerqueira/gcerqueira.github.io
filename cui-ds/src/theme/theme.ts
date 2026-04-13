import { colors } from '../tokens/colors';
import { fontFamily, fontSize, fontWeight, textStyles } from '../tokens/typography';
import { spacing, radius } from '../tokens/spacing';

const createSemanticTokens = (brandPrimary: string, brandSecondary: string) => ({
  brand: {
    primary: brandPrimary,
    secondary: brandSecondary,
  },
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    tertiary: colors.gray[500],
    negative: colors.gray[0],
  },
  status: {
    positive: colors.green[500],
    negative: colors.red[500],
    info: colors.blue[500],
    alert: colors.orange[500],
    disabled: colors.gray[600],
  },
  support: {
    error: colors.red[500],
    disabled: colors.gray[700],
  },
  surface: {
    primary: colors.gray[600],
    neutral: colors.gray[0],
    card: colors.gray[200],
    overlay: 'rgba(18, 18, 18, 0.5)',
    input: {
      primary: colors.gray[500],
      focus: colors.gray[600],
      active: colors.gray[600],
    },
    status: {
      positive: colors.green[0],
      negative: colors.red[0],
      info: colors.blue[0],
      alert: colors.orange[0],
      disabled: colors.gray[300],
    },
  },
});

const baseTheme = {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  textStyles,
  spacing,
  radius,
};

export const brandDefault = {
  ...baseTheme,
  name: 'Brand Default' as const,
  semantic: createSemanticTokens('#7146b5', '#eee6f5'),
};

export const redstone = {
  ...baseTheme,
  name: 'Redstone Credit Union' as const,
  semantic: createSemanticTokens('#c41230', '#fce8eb'),
};

export const goldenOne = {
  ...baseTheme,
  name: 'GoldenOne Credit Union' as const,
  semantic: createSemanticTokens('#005f3b', '#e5f2ec'),
};

export const georgiaOwn = {
  ...baseTheme,
  name: 'Georgia Own Credit Union' as const,
  semantic: createSemanticTokens('#1a3a6b', '#e8edf4'),
};

export const themes = {
  brandDefault,
  redstone,
  goldenOne,
  georgiaOwn,
} as const;

export type CUITheme = typeof brandDefault;
