const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    database: "tcc",
    user: "root",
    password: "",
})

module.exports = { con }
