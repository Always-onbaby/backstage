### 拒绝合并无关历史报错
在本地`git init`初始化一个本地仓库，然后在git上创建一个远程仓库，当使用`remote add`把两个仓库关联起来时，本地仓库同步远程仓库时报错`fatal: refusing to merge unrelated histories`。
出现错误的本质原因是本地和远程的仓库本质上还是两个独立的仓库。
```
git pull origin master --allow-unrelated-histories
```