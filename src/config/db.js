const env = require('./env');

var mysql = require('mysql');
var db = mysql.createConnection({
  host: env.dbHost,
  user: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
});

module.exports = db;
