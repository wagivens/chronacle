import { esbuildPlugin } from '@web/dev-server-esbuild';

const mode = process.env.MODE || 'dev';
if (!['dev', 'prod'].includes(mode)) {
  throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

export default {
    open: true,
    watch: true,
    appIndex: 'dist/index.html',
    nodeResolve: {
      exportConditions: [mode === 'dev' ? ['development'] : []],
      dedupe: true,
    },

    plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
  };