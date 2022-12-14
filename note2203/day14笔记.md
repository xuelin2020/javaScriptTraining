# 一、复习
1. 事件源：绑定事件的元素，一般可以通过this获取
2. 事件目标：触发事件的元素，配合事件对象，身上的target或srcElement属性
3. 事件类型
4. 事件处理函数
5. 事件对象：在事件处理函数内用来记录事件发生时产生的相关信息
6. 鼠标事件对象的常用属性
    - 坐标类
7. 键盘事件对象的常用属性
    - 键码
    - 功能按键的检测
8. 事件流：多层元素嵌套，且相同事件
    - 事件捕获：
        - 从外向内，依次触发元素的相同事件，直到目标元素
    - 目标事件
    - 事件冒泡：
        - 从内向外，依次触发所有父元素的相同事件
            - 通过事件对象身上的方法
9. 事件的绑定
    - 赋值式（DOM0级）：无法重复绑定
        - 绑定：事件源.on事件类型 = function(){}
        - 删除：事件源.on事件类型 = null
    - 监听式（DOM2级）：可以重复绑定
        - 绑定
            - 正常：事件源.addEventListener("事件类型", 事件处理函数, true捕获/false冒泡)
            - IE：事件源.attachEvent("on事件类型", 事件处理函数)
        - 删除
            - 正常：事件源.removeEventListener("事件类型", 事件处理函数, true捕获/false冒泡)
            - IE：事件源.detachEvent("on事件类型", 事件处理函数)
10. 默认事件
    - 浏览器自带的行为
    - 如何阻止默认事件
11. 事件委托（代理）
    - 将多个子元素的相同事件，添加给页面上现存的共同的上层元素。利用了事件冒泡的原理，通过事件对象找到真正触发事件的元素
    - 优势：节省内存，可给页面上暂时不存在的元素绑定事件

# 二、作业
1. 跟随鼠标的提示框
2. 用户在页面输入信息，点击添加，添加到页面的表格中
    - 用户点击表格中的删除，可以删除对应的信息
3. 表格的即时编辑
4. 一连串元素跟随鼠标移动
5. 下拉菜单 - 键盘版
    - 仔仔细细的去观察select+option的效果
        - 使用文字完全描述select+option的效果
        - 点击显示区域，打开下拉菜单
            - 上：初始按上，先到最后一个，然后再依次向上，直到第一个停止
            - 下：初始按下，先到第一个，然后再依次向下，直到最后一个停止
            - 回车：将当前高亮的选项设置为选中的内容
            - 如果鼠标放置在其中一个选项，按上或下以鼠标当前悬停的这个选项作为起始为，向上或向下
            - 如果鼠标放置在其中一个选项，会改变键盘当前选中的选项，下次按键盘再以键盘的规则改变
            - 只要没有选项被选中，直接按下键盘方向键，都以最初始的规则进行

# 三、网页拖拽



