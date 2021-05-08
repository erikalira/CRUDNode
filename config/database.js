module.exports = {
  development: {
    "username": "",
    "password": "",
    "database": "products",
    "dialect": "sqlite",
    "storage": "database.sqlite"
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    "username": process.env.USERNAME,
    "password": process.env.PASSSWORD,
    "database": process.env.DATABASE,
    "dialect": "postgres",
    "host": process.env.HOST,
    "port": "5342",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}
