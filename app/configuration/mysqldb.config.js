const mysql = require('mysql');
const { errorCreator } = require('commonFunctions.js');

require('dotenv').config();

const mysqlQuery = (query) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'mvc_users_crud'
  })

  connection.connect((err) => {
    if (err) {
      connection.destroy()
      throw errorCreator(err.message, 'error', __filename);
    }
  })
  
  connection.query(query, (error, results, fields) => {
    if (error) {
      connection.destroy()
      throw errorCreator(err.message, 'error', __filename);
    };
    console.log(results)
  })

  connection.end()
}

module.exports = mysqlQuery
