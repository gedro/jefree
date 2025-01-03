const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        header: `header@${domain}/header/latest/remoteEntry.js`,
        footer: `footer@${domain}/footer/latest/remoteEntry.js`,
        components: `components@${domain}/components/latest/remoteEntry.js`,
        apis: `apis@${domain}/apis/latest/remoteEntry.js`,
        home: `home@${domain}/home/latest/remoteEntry.js`,
        aboutus: `aboutus@${domain}/aboutus/latest/remoteEntry.js`,
        contact: `contact@${domain}/contact/latest/remoteEntry.js`,
        terms: `terms@${domain}/terms/latest/remoteEntry.js`,
        privacy: `privacy@${domain}/privacy/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        userprofile: `userprofile@${domain}/userprofile/latest/remoteEntry.js`,
        admin: `admin@${domain}/admin/latest/remoteEntry.js`,
        candidate: `candidate@${domain}/candidate/latest/remoteEntry.js`,
        recruiter: `recruiter@${domain}/recruiter/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);