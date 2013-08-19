# 历史

---

## 1.1.3

`tag:fixed` #13 修复 mask 模块不会创建 iframe-shim 的问题。


## 1.1.2

`tag:fixed` 修复 ie678 下莫名其妙触发 resize 事件的问题。

`tag:unresolved` mask 模块在 ie6 下无法正确遮挡 select。

## 1.1.1

`tag:improved` 升级 widget 到 1.1.1

## 1.1.0

`tag:improved` 升级 widget 到 1.1.0, 升级 iframe-shim 到 1.0.2, 升级 position 到 1.0.1

`tag:improved` [#8](https://github.com/aralejs/overlay/pull/8) 如果 align 为空不再使用 js 定位

## 1.0.1

升级 iframe-shim 到 1.0.1

## 1.0.0

0.9.13 逐渐稳定下来了，修复一些 bug 后发布为 1.0.0 版本。

`tag:fixed` [#6](https://github.com/aralejs/overlay/issues/6) 修复了当实例 destroy 后没有在两个静态数组中销毁自己的问题。

`tag:fixed` 修复在 IE6 下设置位置后没有重新同步 iframe-shim 的问题，并优化了调用 shim.sync 的性能。

`tag:changed` 对 arale.widget 的依赖升级到 1.0.3。

`tag:fixed` 修复 Mask 在 Firefox 20 beta 下不显示的问题。


## 0.9.13

`tag:fixed` 修复了 mask 组件 set 方法有时失效的问题。

`tag:fixed` 修复了 _blurHide() 只支持数组对象的问题。

`tag:unresolved` destroy 方法没有考虑到静态数组，但不影响使用。

## 0.9.12

`tag:improved` 提升了浮层显示时的效率（减少了一次定位操作）。

## 0.9.11

`tag:new` 显示时进行浮层定位（将 popup 的功能提到 overlay 中）。

## 0.9.10

`tag:new` 增加 resize 窗口时重新定位浮层功能。

`tag:fixed` 修复 align.baseElement 不支持 jQuery 对象的问题。

