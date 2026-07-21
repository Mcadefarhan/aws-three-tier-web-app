const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "three-tier-db.c30g6ou4aze1.ap-southeast-2.rds.amazonaws.com",
  user: "admin",
  password: "nayabfatima123",
  database: "contactsdb"
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to RDS MySQL!");
});

module.exports = connection;