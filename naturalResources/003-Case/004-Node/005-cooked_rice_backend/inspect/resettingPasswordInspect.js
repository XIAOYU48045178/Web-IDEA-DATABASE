const joi = require('joi')

const password = joi.string().pattern(/^[\S]{6,12}$/).required()

resettingPasswordInspect = {
    body: {
        oldPassword: password,
        newPassword: joi.not(joi.ref('oldPassword')).concat(password),
    },
}

module.exports.resettingPasswordInspect = resettingPasswordInspect