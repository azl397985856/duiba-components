exports.config = {
  namespace: "duiba",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
