import { defineConfig } from 'tsup';

const shared = {
  entry: ['src/index.ts'],
  dts: false,
  splitting: true,
  outDir: 'dist',
  external: ['package.json'],
};

export default defineConfig([
  { ...shared, format: 'cjs' as const, clean: true },
  { ...shared, format: 'esm' as const },
]);
