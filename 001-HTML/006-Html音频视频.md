`<audio>="定义嵌入的声音内容"`
--

`> src="规定音频文件的 URL"`

`> autoplay="准备就绪后立即开始播放"`

`> controls="显示音频控件 例如 播放按钮 暂停按钮等`

`> loop="音频将在每次结束后重新开始"`

`> muted="音频输出应静音"`

`> preload="规定是否以及如何在页面加载时加载音频"`

`! auto="页面加载时加载整个音频文件"`

`! metadata="页面加载时只加载元数据"`

`! none="不应该在页面加载时加载音频文件"`

`<source>="定义媒体元素音频视频图像的多个媒体资源"`
--

```html
<audio controls>
    <source src="./music/xiao.ogg" type="audio/ogg">
    <source src="./music/xiao.mp3" type="audio/mpeg">
</audio>
```

```html
<video width="640" height="400" controls>
    <source src="./music/xiao.mp4" type="video/mp4">
    <source src="./music/xiao.ogg" type="video/ogg">
</video>
```

```html
<picture>
    <source media="(min-width:650px)" srcset="./music/xiao.jpg">
    <source media="(min-width:465px)" srcset="./music/xiao.jpg">
    <img src="./music/xiao.jpg" alt="Flowers" style="width:auto;">
</picture>
```

`<video>="定义嵌入的视频内容"`
--

`> src="规定音频文件的 URL"`

`> width="设置视频播放器的宽度"`

`> height="设置视频播放器的高度"`

`> autoplay="准备就绪后立即开始播放"`

`> controls="显示音频控件 例如 播放按钮 暂停按钮等"`

`> loop="音频将在每次结束后重新开始"`

`> muted="音频输出应静音"`

`> poster="URL 下载视频期间或在用户点击播放按钮之前显示的图像"`

`> preload="规定是否以及如何在页面加载时加载音频"`

`! auto="页面加载时加载整个音频文件"`

`! metadata="页面加载时只加载元数据"`

`! none="不应该在页面加载时加载音频文件"`
