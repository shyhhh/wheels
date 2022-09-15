# 使用链式风格封装
提供 window.jQuery() 全局函数

```js
window.$ = window.jQuery
const $div = $('#xxx')
```

## 查
```js
$div  // 返回值并不是元素，而是一个 api 对象
$div.find('.red') // 查找 #xxx 里的 .red 元素
$div.parent() // 获取爸爸
$div.children() // 获取儿子
$div.siblings() // 获取获取兄弟
$div.index() // 获取排行老几的（从0开始）
$div.next() // 获取弟弟
$div.prev() // 获取哥哥
$div.each(fn) // 遍历并对每个元素执行 fn
```

## 增
```js
$('<div><span> | <span></div>') // 创建div
.appendTo(document.body) 插入到 body 中
```

## 删
```js
$div.remove()
$div.empty()
```

## 改
```js
$div.text() // 读写文本内容
$div.html() // 读写 HTML 内容
$div.attr() // 读写属性
$div.css({color: 'red'}) // 读写 style
$div.addClass('blue')
$div.on('click', fn)
$div.off('click', fn)
```

## 其它
```js
jQuery('.test')
  .find('.child')
  .addClass('red')
  .addClass('blue')
  .addClass('green')
  .end() // 表示当前 .child 结束，回到 .test 开始操作
  .addClass('yellow') // 加在了 .test 上
```

注意： $div 大部分时候对应了多个 div 元素
