var mysql = require("mysql") 
//pool allows parallel connections
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PW,
    database        : process.env.DB_NAME
});

module.exports = pool