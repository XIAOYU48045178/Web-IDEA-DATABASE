const fs = require('fs')
const path = require('path')

const rStyle = /<style>[\s\S]*<\/style>/
const rScript = /<script>[\s\S]*<\/script>/

var readFilePath = './file/index.html'
readFilePath = path.join(__dirname, readFilePath)

fs.readFile(readFilePath, 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log("readError" + err.message)
    }
    writeCSS(dataStr)
    writeJS(dataStr)
    writeHTML(dataStr)

})

function writeCSS(fileStr) {

    var writeCSSPath = './file/css/index.css'
    writeCSSPath = path.join(__dirname, writeCSSPath)

    var rCSS = rStyle.exec(fileStr)

    const rWriteStr = rCSS[0].replace('<style>', '').replace('</style>', '')

    fs.writeFile(writeCSSPath, rWriteStr, 'utf-8', function (err) {
        if (err) {
            return console.log('writeError' + err.message)
        }
        console.log('writeSuccess')
        return
    })
}

function writeJS(fileStr) {

    var writeJSPath = './file/js/index.js'
    writeJSPath = path.join(__dirname, writeJSPath)

    var rJS = rScript.exec(fileStr)

    const rWriteStr = rJS[0].replace('<script>', '').replace('</script>', '')

    fs.writeFile(writeJSPath, rWriteStr, 'utf-8', function (err) {
        if (err) {
            return console.log('writeError' + err.message)
        }
        console.log('writeSuccess')
        return
    })
}

function writeHTML(fileStr) {

    var writeHTMLPath = './file/html/index.html'
    writeHTMLPath = path.join(__dirname, writeHTMLPath)

    const rWriteStr = fileStr
    .replace(rStyle, '<link rel="stylesheet" href="./css/index.css">')
    .replace(rScript, '<script src="./js/index.js"></script>')

    fs.writeFile(writeHTMLPath, rWriteStr, 'utf-8', function (err) {
        if (err) {
            return console.log('writeError' + err.message)
        }
        console.log('writeSuccess')
        return
    })
}