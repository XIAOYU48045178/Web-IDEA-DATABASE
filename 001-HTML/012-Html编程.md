`<script>="定义客户端脚本"`
--

`> src="规定外部脚本文件的 URL"`

`> async="规定脚本在解析页面的同时进行并行下载并在可用时立即执行 在解析完成之前 仅适用于外部脚本"`

`> defer="规定脚本在解析页面的同时进行并行下载并在页面完成解析后执行 仅适用于外部脚本"`

`如果既没有 async 也没有 defer 脚本被立即下载并执行 阻塞页面解析 直到脚本执行完成`

`> crossorigin="将请求的模式设置为 HTTP CORS 请求 规定 CORS 请求的模式"`

`! anonymous="执行跨源请求 不发送凭据"`

`! use-credentials="执行跨源请求 发送凭据 例如：cookie、证书、HTTP 基本身份验证"`

`> integrity="允许浏览器检查获取的脚本，以确保如果源代码被篡改 代码永远不会被加载"`

`!filehash="外部脚本文件的文件哈希值"`

`<noscript>="定义针对不支持客户端脚本的用户的替代内容"`
--

`<embed>="定义外部资源的容器"`
--

`> width="规定嵌入内容的宽度"`

`> height="规定嵌入内容的高度"`

`> src="规定要嵌入的外部文件的地址"`

`> type="规定嵌入内容的媒体类型"`

-`! image/jpg`

`! text/html`

`<object>="定义外部资源的容器"`
--

`> width="规定对象的宽度"`

`> height="规定对象的高度"`

`> name="规定对象的名称"`

`> data="规定要由对象使用的资源的 URL"`

`> form="规定对象所属的表单"`

`> type="规定 data 属性中指定的数据的媒体类型"`

`! image/jpg`

`! text/html`

`> typemustmatch="规定 type 属性与资源的实际内容是否必须匹配才能显示"`

`> usemap="规定要与对象一起使用的客户端图像映射的名称"`

`! id=""`

```html
<object data=".jpg" usemap="#mapname"/></object>
    <map name="mapname">
    <area shape="rect" coords="10,208,155,338" alt="" href="">
    <area shape="circle" coords="570,291,75" alt="" href="">
</map>
```

`<param>="定义对象的参数"`
--

`> name="规定参数的名称"`

`> value="规定参数的值"`

`css`
--

```css
script {
    display: none;
}

embed:focus {
    outline: none;
}

object:focus {
    outline: none;
}

param {
    display: none;
}
```
