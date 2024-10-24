const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:9080/',
  },
  devServer: {
    port: 9080,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:9081/remoteEntry.js',
        auth: 'auth@http://localhost:9082/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:9083/remoteEntry.js',
        api: 'api@http://localhost:9084/remoteEntry.js',
        aboutus: 'aboutus@http://localhost:9085/remoteEntry.js',
        contact: 'contact@http://localhost:9086/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
