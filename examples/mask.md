# 全局遮罩Mask组件示例


单例组件，修改后全部 Mask 都生效。

---

```html
<script type="text/javascript" src="https://a.alipayobjects.com/jquery/jquery/1.7.2/jquery.js"></script>

<button id="a">点击显示默认遮罩层</button>


<select>测试</select>
<select>测试</select>
<select>测试</select>

<button id="b">点击显示修改的遮罩层</button>
```


```javascript
import Overlay from '../src/index';
const mask = Overlay.Mask;

jQuery('#a').click(function() {
    mask.show();
});

jQuery(document).keyup(function(e) {
    // keyboard esc
    if (e.keyCode === 27) {
        mask.hide();
    }
});

// 修改遮罩层(绿色、透明度0.3)
jQuery('#b').click(function() {
    mask.set('backgroundColor', 'green').set('opacity', '0.3').show();
});
```
