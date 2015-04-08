# 全局遮罩Mask组件示例

- order: 2

---

单例组件，修改后全部 Mask 都生效。

---

<script src="../spm_modules/jquery/1.7.2/jquery.js?nowrap"></script>

## 默认遮罩层

<button id="a">点击显示默认遮罩层</button>

````javascript
var mask = require('arale-overlay').Mask;
$('#a').click(function() {
    mask.show();
});
$(document).keyup(function(e) {
    // keyboard esc
    if (e.keyCode === 27) {
        mask.hide();
    }
});
````

<select>测试</select>
<select>测试</select>
<select>测试</select>
<select>测试</select>
<select>测试</select>

## 修改遮罩层(绿色、透明度0.3)

<button id="b">点击显示修改的遮罩层</button>

````javascript
var mask = require('arale-overlay').Mask;
$('#b').click(function() {
    mask.set('backgroundColor', 'green').set('opacity', '0.3').show();
});
````
