const path = require('path');
const postcssBrowserReporter = require('postcss-browser-reporter');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssReporter = require('postcss-reporter');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://fontainetkd.fr',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postcssImport(),
          postcssPresetEnv({
            features: {
              'nesting-rules': true,
              'custom-properties': {
                importFrom: 'src/styles/vars.css',
              },
            },
          }),
          postcssBrowserReporter(),
          postcssReporter(),
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: path.join(__dirname, 'src', 'assets'),
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
