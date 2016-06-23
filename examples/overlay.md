# 基本浮层及其定位

<style>
.parent{
    position:relative;
    float:right;
}
</style>
```html
<script type="text/javascript" src="https://a.alipayobjects.com/jquery/jquery/1.7.2/jquery.js"></script>

<h3>1. 基本浮层</h3>

目标元素1定位在基准元素1的右边，高宽分别为30/100，底色红色。
<div id="c"></div>
<div id="a" class="example">基准元素1</div>

<h3>2. 全局定位浮层</h3>

<div id="b">全局定位浮层</div>

<h3>3. 点击文档其他地方隐藏自身 `this._blurHide()`</h3>

<div id="d1_trigger" style="width:150px;height:30px;background:#ccc;">点击我显隐元素3</div>
<div id="d1" class="example" style="display:none;">目标元素3，点击页面空白处我会消失</div>

<div id="d2_trigger" style="width:150px;height:30px;background:#e80;color:#fff;">点击我显隐元素4</div>
<div id="d2" class="example" style="display:none;">目标元素4，点击页面空白处我会消失</div>
```

```javascript
import Overlay from '../src/index';

var c = new Overlay({
    template: '<div class="overlay">demo1</div>',
    parentNode: '#c',
    id: 'myoverlay',
    style: {
        color: '#fff'
    },
    align: {
        selfXY: ['-100%', 0],
        baseElement: '#a',
        baseXY: [0, 0]
    }
});
c.show();
c.set('style', {
    backgroundColor: '#f53379'
});
c.set('height', 40);


// 2. 全局定位浮层
new Overlay({
    element: '#b',
    width: 100,
    align: {
        baseXY: [200, 0]
    }
}).show();

// 3. 点击文档其他地方隐藏自身 `this._blurHide()`
const testPopup = Overlay.extend({
    attrs : {
        trigger: null
    },
    setup: function() {
        var that = this;
        testPopup.superclass.setup.call(this);
        this._setPosition();
        jQuery(this.get('trigger')).click(function() {
            that.show();
        });
        // 需要调用这句话来实现功能
        this._blurHide(this.get('trigger')); 
    }
});
new testPopup({
    trigger: '#d1_trigger',
    element: '#d1',
    align: {
        baseElement: '#d1_trigger',
        baseXY: ['100%', 0]
    }
});
new testPopup({
    trigger: '#d2_trigger',
    element: '#d2',
    align: {
        baseElement: '#d2_trigger',
        baseXY: ['100%', 0]
    }
});
```
