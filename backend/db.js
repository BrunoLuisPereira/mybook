const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',           // ou outro usuário
  password: '',           // coloque a senha se tiver
  database: 'mybook'
});

module.exports = db;
