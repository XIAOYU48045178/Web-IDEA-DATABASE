`<!DOCTYPE html>="文档类型说明 DTD"`
--

`<html>="定义 HTML 文档的根"`
--

`> lang="页面语言"`

`! en="英语"`

`! zh-CN="汉语"`

`<head>="定义关于文档的信息"`
--

`<title>="定义文档的标题"`
--

`<body>="定义文档的主体"`
--

`> link="默认 显示的颜色" `

`> alink="激活 鼠标点击但是还没有松开时的颜色"`

`> vlink="点击完成之后显示的颜色"`

`<h1> <h6>="定义 HTML 标题"`
--

`<p>="定义段落"`
--

`<br>="定义简单的折行"  `     
--

`<hr>="水平线标签" `
--

`> size="设置线条粗细 默认2"`

`> width="设置线条长度"`

`> color="设置线条颜色"`

`> noshade="线条平面显示无阴影"`

`css`
--

```css
html {
    display: block;
}

html:focus {
    outline: none;
}

head {
    display: none;
}

title {
    display: none;
}

body {
    display: block;
    margin: 8px;
}

body:focus {
    outline: none;
}

h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}

h4 {
    display: block;
    font-size: 1em;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}

h5 {
    display: block;
    font-size: .83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}

h6 {
    display: block;
    font-size: .67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}

p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
}

hr {
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    border-width: 1px; 
}
```
