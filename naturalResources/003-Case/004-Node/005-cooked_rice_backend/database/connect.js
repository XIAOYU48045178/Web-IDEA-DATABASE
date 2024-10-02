const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'XiaoYu.20020312',
    database: 'db_01',
})

module.exports = db
