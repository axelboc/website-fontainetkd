const { createConfig } = require('eslint-config-galex/src/createConfig');
const {
  files: tsFiles,
} = require('eslint-config-galex/src/overrides/typescript');

module.exports = createConfig({
  rules: {
    'import/no-namespace': 'off', // allow `import * as styles`
    'import/no-default-export': 'off', // default exports are common in React
  },
  overrides: [
    {
      files: tsFiles,
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Unused vars should be removed but not prevent compilation
        '@typescript-eslint/no-unused-vars': ['warn'],

        // Prefer `interface` over `type`
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
      },
    },
  ],
});

console.log(module.exports);
