const mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "your db"
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySql DB');
});

module.exports = conn;
