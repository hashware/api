/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

var url = require('url');

module.exports = {
  /*

  models: {
    connection: process.env.SAILS_CONNECTION || 'localDiskDb',
    migrate: 'alter'
  },

  connections: {
    localPostgres: {
      adapter: 'sails-postgresql',
      url: process.env.DATABASE_URL,
      ssl: false
    },
    sessionCache: {
      adapter: 'sails-redis',
      host: url.parse(process.env.REDIS_URL).hostname,
      port: url.parse(process.env.REDIS_URL).port,
      db: url.parse(process.env.REDIS_URL).auth.split(":")[0],
      pass: url.parse(process.env.REDIS_URL).auth.split(":")[1]
    }
  },

  session: {
    adapter: 'redis',
    host: url.parse(process.env.REDIS_URL).hostname,
    port: url.parse(process.env.REDIS_URL).port,
    pass: url.parse(process.env.REDIS_URL).auth.split(":")[1]
  },

  sockets: {
    adapter: 'socket.io-redis',
    host: url.parse(process.env.REDIS_URL).hostname,
    port: url.parse(process.env.REDIS_URL).port,
    pass: url.parse(process.env.REDIS_URL).auth.split(":")[1]
  },
  port: 1337,

  log: {
    level: 'debug'
  },

  permissions: {
    adminEmail: 'tjwebb@hashpanel.io',
    adminUsername: 'tjwebb',
    adminPassword: 'admin1234'
  },

  cgminer: {
    adapter: require('hashpanel-miner-simulator')
  },

  'sails-permissions': {
    _hookTimeout: 120000
  },

  miner: {
    _hookTimeout: 120000
  }
  */
};
