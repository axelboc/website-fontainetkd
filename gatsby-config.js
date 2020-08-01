const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssBrowserReporter = require('postcss-browser-reporter');
const postcssReporter = require('postcss-reporter');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://fontainetkd.fr',
    title: 'Fontaine Taekwon-Do',
    subtitle: 'Club ITF près de Grenoble',
    description:
      'Rejoignez-nous toute l’année à Fontaine, près de Grenoble, pour découvrir le ' +
      'Taekwon‑Do ITF, un art martial coréen moderne conçu pour l’auto-défense.',
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
    'gatsby-plugin-react-svg',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-nprogress',
    'gatsby-plugin-sitemap',
  ],
};
