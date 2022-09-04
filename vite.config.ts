import path from 'path';
import { defineConfig, UserConfigExport } from 'vitest/config';

export const config: UserConfigExport = {
  test: {
    environment: 'happy-dom',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'dom-utils-ts',
    },
  },
};

export default defineConfig(config);
