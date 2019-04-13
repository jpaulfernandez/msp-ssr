// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'msp',  // make sure you create this db
      user: 'root',         // can be something else
      password: '',         // your corresponding password
      host: 'localhost',
      port: '3307'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
