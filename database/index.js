const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'shmetsy'
});

connection.connect();




module.exports = {

};


