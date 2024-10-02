const db = require('../database/connect.js')

getUserInfo = (req, res) => {
    const userInfoSql = `select id, username, nickname, email, user_pic from users where id=?`

    db.query(userInfoSql, req.user.id, (err, results) => {
        if (err) { return res.cc(err) }
        if (results.length !== 1) { return res.cc('获取用户信息失败！') }
        res.send({
            status: 0,
            message: '获取用户基本信息成功!',
            data: results[0],
        })
    })
}

updateUserInfo = (req, res) => {
    const updateSql = `update users set ? where id=?`

    db.query(updateSql, [req.body, req.body.id], (err, results) => {
        if (err) { return res.cc(err) }
        if (results.affectedRows !== 1) { return res.cc('修改用户基本信息失败!') }
        return res.cc('修改用户基本信息成功!', 0)
    })
}

resettingPassword = (req, res) => {

    const userSql = `select * from users where id=?`
    db.query(userSql, req.user.id, (err, results) => {
        if (err) { return res.cc(err) }
        if (results.length !== 1) { return res.cc('用户不存在!') }

        const bcrypt = require('bcryptjs')
        const compareResult = bcrypt.compareSync(req.body.oldPassword, results[0].password)
        if (!compareResult) { return res.cc('原密码错误!') }

        const resettingSql = `update users set password=? where id=?`
        const newPassword = bcrypt.hashSync(req.body.newPassword, 10)
        db.query(resettingSql, [newPassword, req.user.id], (err, results) => {
            if (err) { return res.cc(err) }
            if (results.affectedRows !== 1) { return res.cc('更新密码失败!') }
            res.cc('更新密码成功!', 0)
        })
    })
}


updateAvatar = (req, res) => {
    const updateSql = 'update users set user_pic=? where id=?'
    db.query(updateSql, [req.body.avatar, req.user.id], (err, results) => {
        if (err) { return res.cc(err) }
        if (results.affectedRows !== 1) { return res.cc('更新头像失败!') }
        return res.cc('更新头像成功!', 0)
    })

}


module.exports.getUserInfo = getUserInfo
module.exports.updateUserInfo = updateUserInfo
module.exports.resettingPassword = resettingPassword
module.exports.updateAvatar = updateAvatar



