import type { StorybookConfig } from '@storybook/react-webpack5';
import { join, dirname } from 'path';

/**
 * Esta função resolve o caminho absoluto de um pacote.
 * Necessária para monorepos ou Yarn PnP.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../packages/**/stories/*.stories.@(tsx|mdx)',
    '../packages/**/*.stories.@(tsx|mdx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    config.module?.rules?.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@testing-components/design-tokens': join(
          __dirname,
          '../node_modules/@testing-components/design-tokens',
        ),
      },
    };

    return config;
  },
};

export default config;
