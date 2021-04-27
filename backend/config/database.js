import mysql from "mysql2";
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0843646625',
  database: 'pos_db'
});
 
export default db;