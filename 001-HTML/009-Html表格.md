`<table>="定义表格"`
--

`<caption>="定义表格标题"`
--

`<th>="定义表格中的表头单元格"`
--

`> colspan="规定标题单元格应跨越的列数 注意 colspan="0" 到最后"`

`> rowspan="规定标题单元格应跨越的行数 注意 rowspan="0" 到最后"`

`> abbr="规定标题单元格内容的简短描述"`

`> headers="id 规定一个或多个与单元格相关的标题单元格的 id 列表以空格分隔"`

`> scope="表头单元格是列头、行头还是一组列或行的头部"`

`! col="规定单元格是列的标题"`
  
`! row="规定单元格是行的标题"`
  
`! colgroup="规定单元格是一组列的标题"`
  
`! rowgroup="规定单元格是一组行的标题"`

`<tr>="定义表格中的行"`
--

`<td>="定义表格中的单元"`
--

`> colspan="规定标题单元格应跨越的列数 注意 colspan="0" 到最后"`

`> rowspan="规定标题单元格应跨越的行数 注意 rowspan="0" 到最后"`

`> headers="id 规定一个或多个与单元格相关的标题单元格的 id 列表以空格分隔"`

`<thead>="定义表格中的表头内容"`
--

`<tbody>="定义表格中的主体内容"`
--

`<tfoot>="定义表格中的表注内容 脚注"`
--

`<colgroup>="规定表格中供格式化的列组"`
--

`> span="规定列组应跨越的列数"`

`<col>="规定 <colgroup> 元素 中每列的列属性"`
--

`> span="规定 <col> 元素应跨越的列数"`

```html
<colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:green">
</colgroup>
```

`css`
--

```css
table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: gray;
}

caption {
    display: table-caption;
    text-align: center;
}

th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: center;
}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

td {
    display: table-cell;
    vertical-align: inherit;
}

thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

tfoot {
    display: table-footer-group;
    vertical-align: middle;
    border-color: inherit;
}

col {
    display: table-column;
}

colgroup {
    display: table-column-group;
}
```
