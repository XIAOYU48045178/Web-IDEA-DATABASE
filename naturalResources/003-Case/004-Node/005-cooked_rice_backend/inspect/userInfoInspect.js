const joi = require('joi')
const { updateAvatar } = require('../user/userInfo')

const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()

const UserInfoInspect = {
    body: {
        id,
        nickname,
        email,
    },
}


const avatar = joi.string().dataUri().required()

updateAvatarInspect = {
    body: {
        avatar,
    },
}

module.exports.UserInfoInspect = UserInfoInspect
module.exports.updateAvatarInspect = updateAvatarInspect
