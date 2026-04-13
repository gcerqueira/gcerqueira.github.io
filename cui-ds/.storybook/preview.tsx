import React from 'react';
import type { Preview } from '@storybook/react';
import { CUIThemeProvider } from '../src/theme';
import { brandDefault, redstone, goldenOne, georgiaOwn } from '../src/theme';

const themes = {
  'Brand Default': brandDefault,
  'Redstone Credit Union': redstone,
  'GoldenOne Credit Union': goldenOne,
  'Georgia Own Credit Union': georgiaOwn,
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'CUI Brand Theme',
      defaultValue: 'Brand Default',
      toolbar: {
        icon: 'paintbrush',
        items: Object.keys(themes),
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeName = context.globals.theme || 'Brand Default';
      const theme = themes[themeName as keyof typeof themes] || brandDefault;
      return (
        <CUIThemeProvider theme={theme}>
          <Story />
        </CUIThemeProvider>
      );
    },
  ],
};

export default preview;
