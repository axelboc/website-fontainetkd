import path from 'node:path';

import postcssBrowserReporter from 'postcss-browser-reporter';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssReporter from 'postcss-reporter';

const config = {
  siteMetadata: {
    siteUrl: 'https://fontainetkd.fr',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postcssImport(),
          postcssPresetEnv({ features: { 'nesting-rules': true } }),
          postcssBrowserReporter(),
          postcssReporter(),
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: path.join(import.meta.dirname, 'src', 'assets'),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-nprogress',
    'gatsby-plugin-sitemap',
  ],
};

export default config;
