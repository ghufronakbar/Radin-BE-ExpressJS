var mysql = require("mysql");

//koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "radin",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = conn;
