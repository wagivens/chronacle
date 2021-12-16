export default {
    open: true,
    watch: true,
    appIndex: 'src/index.html',
    nodeResolve: {
      exportConditions: ['development'],
      dedupe: true,
    },
    esbuildTarget: 'auto',
  };