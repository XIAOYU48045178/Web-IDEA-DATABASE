`> grid="块级网格"`

`> inline-grid="行内块级网格"`

`> grid-template-rows="行数"`

`! 固定值`

`! 百分比`

`! Repeat(Row，Size)`

`! Repeate(Auto-fill，Size)`

`! n fr="占满或平分天下"`

`! minmax(Size，Size)`

`! auto`

`> grid-template-columns="列数"`

`! 固定值`

`! 百分比`

`! Repeat(Columns，Size)`

`! Repeate(Auto-fill，Size)`

`! n fr="占满或平分天下"`

`! minmax(Size，Size)`

`! auto`

`> gap="行列间距"`

`> row-gap="行间距"`

`> column-gap="列间距"`

`> grid-template-areas="划分区域 名称"`

`> grid-area="区域名称"`

```css
grid-template-areas:'a a c'
                    'd e f'
                    'g h i'
;
```

```css
grid-area:a;
```

`1> grid-auto-flow="主轴方向"`

`! row="行"`

`! columns="列"`

`1> place-content="justify-content align-content"`

`1> justify-content="控制子元素在主轴上的排列方式"`

`! flex-start="从主轴的起点对齐 默认值"`

`! flex-end="从主轴的终点对齐"`

`! center="居中对齐"`

`! space-around="在父盒子里平分"`

`! space-between="两端对齐 平分"`

`> align-content="设置子元素在侧轴上的对齐方式"`

`! flex-start="从侧轴开始的方向对齐"`

`! flex-end="从侧轴结束的方向对齐"`

`! baseline="基线"`

`! center="中间对齐"`

`! stretch="拉伸"`

`> Place-items="justify-items align-items"`

`> justify-items="控制子元素在网格内的排列方式"`

`! flex-start="从网格内主轴的起点对齐 默认值"`

`! flex-end="从网格内主轴的终点对齐"`

`! center="网格内居中对齐"`

`! space-around="在网格内父盒子里平分"`

`! space-between="网格内两端对齐 平分"`

`> align-items="设置子元素在侧轴上的对齐方式"`

`! flex-start="从网格内侧轴开始的方向对齐"`

`! flex-end="从网格内侧轴结束的方向对齐"`

`! baseline="网格内基线"`

`! center="网格内中间对齐"`

`! stretch="网格内拉伸"`

`> gird-row="网格线合并"`

`> gird-row-start="网格线合并"`

`> gird-row-end="网格线合并"`

`> gird-columns="网格线合并"`

`> gird-columns-start="网格线合并"`

`> gird-columns-end="网格线合并"`

```css
gird-row: 2/4;
gird-columns: 1/3;
```

```css
gird-row-start: 2;
gird-row-end: 4;
gird-columns-start: 1;
gird-columns-end: 3;
```
