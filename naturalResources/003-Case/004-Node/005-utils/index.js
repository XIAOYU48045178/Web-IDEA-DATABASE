const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

console.log(escape)
module.exports = { 
    ...date,
    ...escape
}

