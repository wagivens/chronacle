import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
    open: true,
    watch: true,
    appIndex: 'src/index.html',
    nodeResolve: {
      exportConditions: ['development'],
      dedupe: true,
    },

    plugins: [esbuildPlugin({ ts: true, target: 'auto' })],
  };