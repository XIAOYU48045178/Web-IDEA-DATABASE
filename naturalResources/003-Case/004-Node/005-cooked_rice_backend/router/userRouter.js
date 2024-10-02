const express = require('express')
const router = express.Router()

const user = require('../user/user.js')

const expressJoi = require('@escook/express-joi')
const { register_login_inspect } = require('../inspect/userInspect.js')

router.post('/registerUser', expressJoi(register_login_inspect), user.registerUser)
router.post('/login', expressJoi(register_login_inspect), user.login)

module.exports = router
