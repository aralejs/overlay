# 全局遮罩Mask组件示例

- order: 2

---

单例组件，修改后全部 Mask 都生效。

---

## 默认遮罩层

<button id="a">点击显示默认遮罩层</button>

````javascript
seajs.use(['$', 'mask'], function($, mask) {
    $('#a').click(function() {
        mask.show();
    });
    $(document).keyup(function(e) {
        // keyboard esc
        if (e.keyCode === 27) {
            mask.hide();
        }
    });
});
````

## 修改遮罩层(绿色、透明度0.3)

<button id="b">点击显示修改的遮罩层</button>

````javascript
seajs.use(['$', 'mask'], function($, mask) {
    $('#b').click(function() {
        mask.set('backgroundColor', 'green').set('opacity', '0.3').show();
    });
});
````
