# 全局遮罩Mask组件示例

- order: 2

---

## 默认遮罩层

<button id="a">点击显示默认遮罩层</button>

````javascript
seajs.use('../src/mask', function(mask) {
    document.getElementById('a').onclick = function() {
        mask.show();
    };
});
````

## 修改遮罩层(绿色、透明度0.3)

<button id="b">点击显示修改的遮罩层</button>

````javascript
seajs.use('../src/mask', function(mask) {
    document.getElementById('b').onclick = function() {
        mask.set('backgroundColor', 'green').set('opacity', '0.3').show();
    };
});
````


