# 一、jq插件开发规范
1. 插件文件创建及命名
    - jquery.xxx.js
2. 创建独立作用域，开启严格模式
3. 私有化$（传参）
    - 为了防止其他第三方文件也对$进行了定义，导致无法通过$获取jq对象
4. 向jq对象合并自定义功能
    - 全局方法：不需要操作DOM的功能
    - DOM方法：需要操作DOM的功能
        - $.fn是jq提供的自身DOM对象的原型链对象
    - 对象语法
    - $.extend(对象)
    - $.fn.extend(对象)
5. 在自定义功能函数内，实现具体的功能

# 二、轮播图插件开发

# 三、版本管理
1. 版本：
    - 文件的每次修改，都可以称之为一个版本
2. 为什么要管理：
    - 为了方便的记录每次对文件的修改，可以回溯曾经的而历史版本，进行效果比对或bug的溯源
3. 如何科学的有效的管理
    - 将文件解析成数据流，每次记录版本，只记录修改了的部分，没有修改的部分，只在第一个版本中记录一次，通过工具可以进行文件流的合并，比对，还原等操作
4. 管理工具
    - 集中式管理：连接一台中央服务器，所有的客户端都将版本信息上传到服务器，由服务器进行统一管理和记录
        - 统一管理，有全局版本号
        - 和服务器断开，无法进行版本存储
        - 代表软件：svn
    - 分布式管理：每台设备都可以独立存储版本信息，不需要上传到服务器，也可以记录版本。
        - 独立管理，安全，依赖性低
        - 没有全局版本号，当需要进行版本信息交互时，必须将本地的版本信息上传到服务器，形成线上版本
        - 代表软件：git
    - 工作区：正在操作的文件区域
    - 暂存区：上传到版本库之前的等待区域，该区域中的文件会在上传之前等待
    - 版本库：产生的版本信息
5. git的使用 - 初始环境搭建
    - 下载git - 注意操作系统版本（windows32位和64位，Mac）
        - 官网：[git](https://git-scm.com/downloads)
        - 班级QQ群共享文件
    - 安装：
        - next安装法
        - 注意：安装完成后，桌面无快捷图标
    - 测试是否安装成功：
        - windows：桌面右键选择git bash，输入：`git --version`，回车
        - mac：终端，输入`git --version`，回车
        - 看到版本号，表示安装成功
    - 创建版本库（初始化git环境）
        - git init
            - 在当前命令框的打开目录下，创建一个隐藏的.git文件夹
            - 用来存储将来版本管理的过程中产生的每个版本信息
    - 配置个人身份信息
        - 个人身份信息：会被记录到每个版本信息上，方便版本溯源
        - 全局：
            - git config --global user.name "名字"
            - git config --global user.email "邮箱"
        - 项目级：注意命令框的打开目录
            - git config user.name "名字"
            - git config user.email "邮箱"
        - 如果全局和项目都配置了个人信息，生效的是项目级
6. git的使用 - 产生版本
    - 开始工作
        - 在工作区中，产生文件，写代码，写文件...
        - 将文件添加到暂存区
            - 添加单个文件：
                - git add 文件名
            - 添加所有文件：
                - git add *
                - git add .
                - git add --all
                - git add -A
        - 将暂存区中的文件，提交到版本库
            - git commit -m "当前版本的描述信息"
    - 辅助操作
        - 查看截止到当前版本的版本信息：
            - git log
            - git log --oneline
        - 查看操作日志信息：git reflog
        - 查看当前工作区状态：git status
        - 查看当前工作区的改变：git diff
        - 查看日志信息时，信息太多，导致信息折叠，可以按回车或下键，显示隐藏信息，按q键退出日志状态
    - 版本回退
        - git reset --hard 版本号
        - 注意：
            - 不要回到过去，进行任何修改，并提交
            - 如果必须操作，一定要先创建分支，再进行回退，修改
7. git的分支 - 平行空间
    - 查看分支：
        - 查看本地分支：git branch
        - 查看线上分支：git branch -r
        - 查看全部分支：git branch -a
    - 创建分支：git branch 分支名
    - 切换分支：git checkout 分支名
    - 合并分支：
        - git merge 分支名
        - 如：b1合并到master，需要先切换到master，再做合并
    - 删除分支：git branch -d 分支名
8. git线上仓库的使用

# 四、作业
1. 轮播图插件开发
2. git的使用
3. 使用git对轮播图插件进行版本管理，至少产生8个版本
    - 创建文件
    - 设计页面结构
    - 处理参数
    - 渲染基础结构
    - 左右按钮功能
    - 分页器
    - 自动播放
    - 最终测试
