// Application configuration.

// http://www.codedependant.net/2015/01/31/production-ready-node-configuration
import nconf from 'nconf';

const appName = require('../../package.json').name;
const isProduction = process.env.NODE_ENV === 'production';

// Specifying an env delimiter allows us to override config when shipping to
// production server. 'foo__bar=2 gulp' will set config to '{foo: {bar: 2}}'
nconf.env('__');

// For local development with secrets. Check src/common/_secrets.json file.
nconf.file('src/common/secrets.json');

// Remember, never put secrets in default config.
// Use environment variables for production, and secrets.json for development.
nconf.defaults({
  appName,
  defaultLocale: 'en',
  googleAnalyticsId: 'UA-XXXXXXX-X',
  isProduction,
  locales: ['en'],
  port: process.env.PORT || 8000,
  webAPIUrl: 'http://172.16.35.132:8080'
});

export default nconf.get();
