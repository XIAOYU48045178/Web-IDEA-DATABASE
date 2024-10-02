const db = require('../database/connect.js')
const bcrypt = require('bcryptjs')

const registerUser = (req, res) => {

    const userinfo = req.body

    const usernameSql = `select * from users where username=?`
    db.query(usernameSql, [userinfo.username], (err, results) => {
        if (err) { return res.cc(err) }
        if (results.length > 0) {
            return res.cc('用户名被占用!')
        }
    })

    userinfo.password = bcrypt.hashSync(userinfo.password, 10)

    const insertSql = 'insert into users set ?'
    db.query(insertSql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
        if (err) { return res.cc(err) }
        if (results.affectedRows !== 1) {
            return res.cc('注册失败,请稍后重试!')
        }
        res.cc('注册成功!', 0)
    })

}

const login = (req, res) => {
    const userinfo = req.body

    const passwordSql = `select * from users where username=?`
    db.query(passwordSql, userinfo.username, (err, results) => {
        if (err) { return res.cc(err) }
        if (results.length !== 1) { return res.cc('登录失败!') }

        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)

        if (!compareResult) {
            return res.cc('登录失败!')
        }

        const user = { ...results[0], password: '', user_pic: '' }

        const jwt = require('jsonwebtoken')
        const jwtTokenStr = require('../config/config.js')
        const tokenStr = jwt.sign(user, jwtTokenStr.jwtSecretKey, { expiresIn: '10h', })

        res.send({
            status: 0,
            message: '登录成功！',
            token: 'Bearer ' + tokenStr,
        })

    })

}

module.exports.registerUser = registerUser
module.exports.login = login




