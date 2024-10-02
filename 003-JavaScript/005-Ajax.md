`Get Post 区别`  
-- 

`> Get`  `路径` `?name=xiao&age=100` 

`> Post` `请求体`  

`! x-www-formurlencoded` `name=xiao&age=100`

`! json` `{"name":"xiao",age:100}`

`Ajax 语法`
--

`> GET`

```js
var xhr = new XMLHttpRequest()
xhr.open('GET', 'Website?name=...&age=...', true)
xhr.onload = function () {
    console.log(JSON.parse(xhr.responseText))
}
xhr.send()
```

`> POST`

```js
var xhr = new XMLHttpRequest()
xhr.open('POST', 'Website', true)
xhr.onload = function () {
    console.log(JSON.parse(xhr.responseText))
}
xhr.setRequestHeader('content-type', '传递参数的格式:application/x-www-form-urlencoded')
xhr.send('name=...&age=...')
```

`fetch 语法`
--

`> Get`

```js
fetch("")
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
``` 

`> Post`

```js
fetch("",{
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:"xiao",
        age:100
    })
}).then(res => res.json()).then(res => {
    console.log(res)
})
```

```js
fetch("",{
        method:'post',
        headers: {
            "Content‐Type": "application/x‐www‐form‐urlencoded"
        },
        body: "name=xiao&age=100", 
}).then(res=>res.json()).then(res=>{console.log(res)});
```

`axios 语法`
--

`> Get`

```js
axios.get("").then(res=>{
    console.log(res.data)
})
```

`> Post`

```js
axios.post("","name=xiao&age=100").then(res=>{
    console.log(res.data)
})
```

```js
axios.post("",{name:"xiao",age:100}).then(res=>{
    console.log(res.data)
})
```

`接口`
--

`以 .JPG 结尾并不一定是图像文件也有可能是一个接口`
