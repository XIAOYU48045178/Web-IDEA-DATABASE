const http = require('http')
const fs = require('fs')
const path = require('path')

const main = () => {
    creatWeb()
}

main()

function read(url, res) {
    fs.readFile(url, 'utf-8', (err, dataStr) => {
        if (err) {
            return res.end('404 Not Found')
        }
        return res.end(dataStr)
    })
}

function creatWeb() {
    const server = http.createServer()
    server.on('request', (req, res) => {
        let readUrl = ''
        const url = req.url
        const method = req.method

        if(url==='/'){
            readUrl = path.join(__dirname,'./file/index.html')
        }else{
            readUrl = path.join(__dirname,'./file',url)
        }
        read(readUrl, res)

    })
    server.listen(3389, () => {
        console.log('server running at http://127.0.0.1:3389')
    })

}
