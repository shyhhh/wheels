# 基于对象风格封装

  提供 window.dom 全局对象 [源代码](https://github.com/shyhhh/wheels/blob/main/dom/dom.js)

```shell
  # 增
  dom.create(string)
  dom.after(currentNode, newNode)
  dom.before(currentNode, newNode)
  dom.append(parent, node)
  dom.wrap(node, parent)

  # 删
  dom.remove(node)
  dom.empty(node)

  # 改
  dom.attr(node, name, value)
  dom.text(node, string)
  dom.html(node, string)
  dom.style(node, name, value)
  dom.add(node, className)
  dom.remove(node, className)
  dom.has(node, className)
  dom.on(node, eventName, fn)
  dom.off(node, eventName, fn)

  # 查
  dom.find(selector, scope)
  dom.parent(node)
  dom.children(node)
  dom.siblings(node)
  dom.next(node)
  dom.previous(node)
  dom.each(nodeList, fn)
  dom.index(node)
```
