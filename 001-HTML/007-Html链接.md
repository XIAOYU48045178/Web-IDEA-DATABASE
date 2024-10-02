`<a>="定义超链接"`
--

`> href="规定链接指向的页面的 URL"`

`! URL="链接的 URL"`

`> target="规定在何处打开被链接文档"`

`! _blank="在新窗口或选项卡中打开链接文档"`

`! _self="在与点击相同的框架中打开链接的文档 默认"`

`! _parent="在父框架中打开链接文档"`

`! _top="在窗口的整个主体中打开链接的文档"`

`! framename="在指定的 iframe 中打开链接文档"`

`> download="规定当用户单击超链接时将下载目标"`

`! filename="可选 规定下载文件的新文件名"`

`> hreflang="规定被链接文档的语言"`

`<link>定义文档与外部资源的关系 最常用于链接样式表`
--

`> href="规定被链接文档的位置"`

`! URL="被链接的资源/文档的 URL"`

`> hreflang="规定被链接文档中文本的语言"`
 
`> rel="必需 规定当前文档和被链接文档之间的关系"`

`<nav>="定义导航链接"`
--

`css`
--

```css
a:link,
a:visited {
    color: (internal value);
    text-decoration: underline;
    cursor: auto;
}

a:link:active,
a:visited:active {
    color: (internal value);
}

link {
    display: none;
}

nav {
    display: block;
}
```
