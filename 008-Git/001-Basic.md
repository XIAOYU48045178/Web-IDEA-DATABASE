`配置`
--

`> Git config --global user.email "..."` `配置电子邮件地址`

`> Git config --global user.name "..."` `配置用户名`

`> git config --global http.sslVerify false` `忽略 SSL 证书验证`

`初始化`
--

`> Git init` `初始化本地仓库`

`提交状态`
--

`> Git status` `查看 Git 此时提交状态`

`本地`
--

`> Git add .` `添加到暂存区`

`> Git commit -m '注释'` `提交到本地仓库`

`> ESC :WQ` `退出`

`回退`
--

`> Git log` `查看提交记录`

`> Git reset --hard HEAD^` `回退上一个版本`

`> Git reflog` `操作记录`

`> Git reset --hard  6 位版本号` `回退任意版本`

`对比`
--

`> Git diff` `查看自上次提交到暂存区后 哪些文件被修改了 以及这些修改的具体内容`

`远程`
--

`> Git remote add origin URL` `设置远程仓库`

`> Git push -u origin main` `推送更改到远程仓库`

`> Git push -u origin main -f` `忽略文件修改推送更改到远程仓库`

`克隆`
--

`> Git clone URL` `克隆远程仓库到本地`

`拉取`
--

`> Git pull origin main` `拉取代码到本地`

`分支`
--

`> Git branch -a` `查看分支`

`> Git branch -m main` `主分支重命名`

`> Git checkout -b 分支名称` `创建新的分支`

`> Git checkout 分支名称` `切换到...分支`

`> Git push origin ...` `推送 ... 分支到远程 ... 分支`

`> Git push origin main:...` `推送 main 分支到远程 ... 分支`

`> Git push origin :...` `删除远程 ... 分支`

`> Git branch -d ...` `删除本地分支 ...`

`> Git merge ...` `合并 ... 分支`

`删除凭据`
--
`控制面板 凭据管理器 普通凭据 删除`
