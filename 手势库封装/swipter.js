let Swipter = (function(){
  let root = document
  let eventHub = {'swipLeft': [], 'swipRight': []}
  function bind(node) {
    root = node
  }
  function on(type, fn) {
    if(eventHub[type]) {
      eventHub[type].push(fn)
    }
  }

  var initX
  var newX
  var clock
  root.ontouchstart = function(e) {
    initX = e.changedTouches[0].pageX
  }

  root.ontouchmove  = function(e) {
    if(clock) clearInterval(clock)
    clock = setTimeout(()=>{
      newX = e.changedTouches[0].pageX
      if(newX - initX > 0) {
        eventHub['swipRight'].forEach(fn=>fn())
      } else {
        eventHub['swipLeft'].forEach(fn=>fn())
      }
    }, 100)
  }
  return {
    bind: bind,
    on: on
  }
})()

// 按照以下写法就可以对手势进行监听
Swipter.bind(document.querySelector('#box'))

Swipter.on('swipLeft', function() {
  console.log('swipLeft')
})
Swipter.on('swipLeft', function() {
  console.log('swipLeft 111')
})

Swipter.on('swipRight', function() {
  console.log('swipRight')
})
Swipter.on('swipRight', function() {
  console.log('swipRight 222')
})
