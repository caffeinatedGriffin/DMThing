// http://www.browsersync.io/docs/options/
module.exports = {
  files: [
    "src/**/*.html",
    "src/**/*.js",
  ],
  reloadDebounce: 300,
  server: {
    baseDir: "./src",
    routes: {
      "/node_modules": "./node_modules",
      "/systemjs.config.js": "./systemjs.config.js"
    }
  },
};
