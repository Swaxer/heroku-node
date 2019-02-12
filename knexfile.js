require('dotenv').config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: `${process.env.DATABASE_URL}${process.env.NODE_ENV === 'production' ? '?ssl=require' : ''}`,
  },

  production: {
    client: 'postgresql',
    connection: `${process.env.DATABASE_URL}${process.env.NODE_ENV === 'production' ? '?ssl=require' : ''}`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};