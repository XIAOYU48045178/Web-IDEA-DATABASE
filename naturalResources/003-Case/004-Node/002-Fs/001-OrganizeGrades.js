const fs = require('fs')

var readFilePath = './file/001-readFile.txt'
var writeFilePath = './file/001-writeFile.txt'

fs.readFile(readFilePath, 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log("readError")
    }
    const oldArr = dataStr.split(' ')
    const newArr = []
    oldArr.forEach((i) => {
        newArr.push(i.replace('=','：'))
    })
    const newDataStr = newArr.join('\n\r')

    fs.writeFile(writeFilePath,newDataStr,'utf-8',function(err){
        if(err){
            return console.log("writeError")
        }
        return console.log("writeSuccess")
    })
})