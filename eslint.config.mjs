import { createConfig, detectOpts } from '@esrf/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

const opts = detectOpts(import.meta.dirname);

const config = defineConfig([
  globalIgnores(['.cache/', 'public/']),
  ...createConfig(opts),
  {
    rules: {
      'import/no-namespace': 'off',
    },
  },
]);

export default config;
