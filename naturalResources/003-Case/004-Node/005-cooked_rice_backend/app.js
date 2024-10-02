const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.cc = (err, status = 1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

const jwtTokenStr = require('./config/config.js')
const expressJWT = require('express-jwt')
app.use(expressJWT({ secret: jwtTokenStr.jwtSecretKey }).unless({ path: [/^\/notoken\//] }))


const userRouter = require('./router/userRouter.js')
app.use('/notoken', userRouter)


const joi = require('joi')
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) { return res.cc(err) }
    if (err.name === 'UnauthorizedError') { return res.cc('身份认证失败!') }
    res.cc(err)
})

const userInfoRouter = require('./router/userInfoRouter.js')
app.use('/token', userInfoRouter)


app.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})





