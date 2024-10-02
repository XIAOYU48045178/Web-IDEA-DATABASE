`服务器相关概念`
--

`> IP 地址`

`IP 地址就是互联网上每台计算机的唯一地址 IP 地址具有唯一性 只有知道对方 IP 地址的前提下才能与对应的电脑之间进行数据通信 IP 地址的格式通常用点分十进制表示 是 0~255 之间的十进制整数 例: 192.168.1.1`

`互联网中每台 Web 服务器都有自己的 IP 地址 例: 可以在 Windows 终端中运行 ping www.baidu.com 命令即可查看到百度服务器的 IP 地址`

`开发期间自己的电脑既是一台服务器也是一个客户端 为了方便测试可以在自己的浏览器中输入 127.0.0.1 这个 IP 地址把自己的电脑当做一台服务器访问`

`> 域名和域名服务器`

`IP 地址能够唯一地标记网络上的计算机 但 IP 地址是一长串数字不直观不便于记忆 于是人们又发明了另一套字符型的地址方案即域名 DomainName 地址`

`IP 地址和域名是一对应的关系 这份对应关系存放在一种叫做域名服务器 DNS Domainnameserver 的电脑中 只需通过好记的域名访问对应的服务器即可 对应的转换工作由域名服务器实现 域名服务器就是提供 IP 地址和域名之间的转换服务的服务器`

`127.0.0.1 对应的域名是 localhost`

`> 端口号`

`在一台电脑中可以运行成百上千个 web 服务 每个web服务都对应一个唯一的端口号 客户端发送过来的网络请求通过端口号可以被准确地交给对应的 web 服务进行处理`

`在实际应用中 URL 中的 80 端口可以被省略`

`http 引入`
--

`const http = require('http')`

`http 方法`
--

`> 创建服务器`

`creatSerever="创建服务器"`

```js
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    console.log('Someone visit our web server')
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1')
})
```

`> Req and Res`

```js
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {

    <!-- Res 请求对象 包含客户端相关数据和属性 -->
    <!-- Req 响应对象 包含服务端相关数据和属性 -->

    console.log('Someone visit our web server')

    const url = req.url
    const method = req.method

    let content = '404 Not Found'

    if (url === '/' || url === '/index.html') {
        content = ''
    }
    if (url === '') {
        content = ''
    }

    const str = `Your request url is ${url},and request methon is ${method}`

    res.setHeader('Content-Type', 'text/html; charset=utf-8') <!-- 防止中文乱码 html 字符串-->
    res.end(str + '\r\n' + content) <!-- 向客户端响应内容 结束这次处理过程 -->
})

server.listen(80, () => { <!-- 不要 80 端口 需要权限 3389 -->
    console.log('server running at http://127.0.0.1') <!-- 80 端口可以省略 -->
})
```
