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
        header: 'header@http://localhost:9081/remoteEntry.js',
        footer: 'footer@http://localhost:9082/remoteEntry.js',
        components: 'components@http://localhost:9083/remoteEntry.js',
        apis: 'apis@http://localhost:9084/remoteEntry.js',
        home: 'home@http://localhost:9085/remoteEntry.js',
        aboutus: 'aboutus@http://localhost:9086/remoteEntry.js',
        contact: 'contact@http://localhost:9087/remoteEntry.js',
        terms: 'terms@http://localhost:9088/remoteEntry.js',
        privacy: 'privacy@http://localhost:9089/remoteEntry.js',
        auth: 'auth@http://localhost:9090/remoteEntry.js',
        userprofile: 'userprofile@http://localhost:9091/remoteEntry.js',
        admin: 'admin@http://localhost:9092/remoteEntry.js',
        candidate: 'candidate@http://localhost:9093/remoteEntry.js',
        recruiter: 'recruiter@http://localhost:9094/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
