# 移动端左移右移手势库封装
```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <title>手势库</title>
</head>
<body>
  <div id="box"></div>
</body>
</html>
```
```css
#box {
  height: 100px;
  background: #bd1000;
}
```

```js
// 如果后续想增加其他的手势库，可以在这里增加其他的名字
  let eventHub = {'swipLeft': [], 'swipRight': []}
```

```js
// 触摸事件节流
var box =  document.querySelector('#box')
var initX
var newX
var clock
box.ontouchstart = function(e) {
  initX = e.changedTouches[0].pageX
}

boc.ontouchmove = function(e) {
  if (clock) clearInterval(clock)
  clock = setTimeout(() => {
    newX = e.changedTouches[0].pageX
    if (newX - initX > 0) {
    	console.log('right')
    } else {
      cosole.log('left')
    }
  }, 100)
}
```

# 用法
```js
// 绑定 node
Swipter.bind(document.querySelector('#box'))

// 操作 node 监听事件
Swipter.on('swipLeft', function() {
  console.log('swipLeft')
})
Swipter.on('swipLeft', function() {
  console.log('swipLeft 111')
})
```
