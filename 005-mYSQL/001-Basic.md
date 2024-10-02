`创建数据库`
--

`CREATE DATABASE IF NOT EXISTS database_name;`

`创建 表`
--

`> 数据类型`

`! int` `整数`

`! varchar(len)` `字符串`

`! tinyint(1)` `布尔值`

`> 字段特殊标识`

`! PK` `PRIMARY KEY` `主键唯一标识`

`! NN` `NOT NULL` `值不允许为空`

`! UQ` `UNIQUE` `值唯一`

`! AI` `AUTO_INCREMENT` `值自动增长`

```sql
CREATE TABLE `database_name`.`table_name` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `status` TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `Id_UNIQUE` (`id` ASC) VISIBLE,
    UNIQUE INDEX `name_UNIQUE` (`username` ASC) VISIBLE
);
```

`查询`
--

`> 通过 * 把 users 表中所有的数据查询出来`

`select * from users`

`> 从 users 表中把 username 和 password 对应的数据查询出来`

`select username, password from users`

`插入`
--

`> 向 users 表中，插入新数据 username 的值为 xxx password 的值为 000000`

`insert into users (username, password) values ('xxx','000000')`

`更新`
--

`> 将 id 为 4 的用户密码 更新成 888888`

`update users set password='888888' where id=4`

`> 更新 id 为 2 的用户，把用户密码更新为 admin123  同时把用户的状态更新为 1`

`update users set password='admin123', status=1 where id=2`

`删除`
--

`> 删除 users 表中 id 为 4 的用户`

`delete from users where id=4`

`Where`
--

`select * from users where status=1`

`select * from users where id>=2`

`select * from users where username<>'xx'` `select * from users where username!='xx'`

`AND OR`
--

`> 使用 AND 来显示所有状态为 0 且 id 小于 3 的用户`

`select * from users where status=0 and id<3`

`> 使用 or 来显示所有状态为 1 或 username 为 zs 的用户`

`select * from users where status=1 or username='zs'`

`ORDER` `desc 表示降序排序` `asc 表示升序排序` `默认升序`
--

`> 对users表中的数据 按照 status 字段进行升序排序`

`select * from users order by status`

`> 按照 id 对结果进行降序的排序`

`select * from users order by id desc`

`> 对 users 表中的数据 先按照 status 进行降序排序 再按照 username 字母的顺序 进行升序的排序`

`select * from users order by status desc, username asc`

`COUNT`
--

`> 使用 count(*) 来统计 users 表中 状态为 0 用户的总数量`

`select count(*) from users where status=0`

`AS`
--

`> 使用 AS 关键字给列起别名`

`select count(*) as total from users where status=0` 

`select username as Username, password as Password from users`
