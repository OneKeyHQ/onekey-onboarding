import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

const config = [
  {
    external: ['bowser'],
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/onekey-onboarding.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/onekey-onboarding.es.js',
        format: 'es',
      },
    ],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/onekey-onboarding.bundle.js',
        format: 'iife',
        name: 'OneKeyOnboarding',
      },
    ],
    plugins: [typescript(), resolve()],
  },
];

export default config;
