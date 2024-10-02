`<menu>="定义无序列表"`
--

`<ul>="定义无序列表"`
--

`<ol>="定义有序列表"`
--

`> type="规定要在列表中使用的标记类型"`

`! 1="默认 十进制数 1、2、3、4"`

`! a="按字母顺序排列的列表 小写 a、b、c、d"`

`! A="按字母顺序排列的列表 大写 A、B、C、D"`

`! i="罗马数字，小写 i, ii, iii, iv"`

`! I="罗马数字，大写 I、II、III、IV"`

`> start="规定有序列表的起始值"`

`! number="规定有序列表中第一个列表项的起始值"`

`> reversed="规定列表顺序应该反转"`

`<li>="定义列表的项目"`
--

`> value="仅适用于 <ol> 列表规定列表项的起始值随后的列表项将从该数字递增"`

`! number="规定列表项的值"`

`<dl>="定义描述列表"`
--

`<dt>="定义描述列表中的术语/名称"`
--

`<dd>="定义描述列表中术语的描述/值"`
--

`css`
--

```css
menu {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

ul {
    display: block;
    list-style-type: disc;
    margin-top: 1em;
    margin-bottom: 1 em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
}

ol {
    display: block;
    list-style-type: decimal;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
}

li {
    display: list-item;
}

dl {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
}

dt {
    display: block;
}

dd {
    display: block;
    margin-left: 40px;
}
```
