<style>
.parent{
    position:relative;
    float:right;
}
.example {
    color: #fff;
    background-color: #89c237;
    display:inline-block;
}
</style>

## 1. 基本浮层

目标元素1定位在基准元素1的右边，高宽分别为30，底色红色。

<div id="c"></div>
<div id="a" class="example">基准元素1</div>

```javascript
seajs.use('../src/overlay', function(Overlay) {
    var o = new Overlay({
        template: '<div class="overlay">目标元素1</div>',
        parentNode: '#c',
        id: 'overlay',
        style: {
            color: '#fff'
        },
        align: {
            selfXY: ['-100%', 0],
            baseElement: '#a',
            baseXY: [0, 0]
        }
    });
    o.show();
    o.set('style', {
        backgroundColor: '#f53379'
    });
    o.set('width', 100);
});
```
## 2. 全局定位浮层

目标元素2，宽80高30，位置为可视区域top:0 left:200。

<div id="b" class="example">目标元素2</div>

```javascript
seajs.use('../src/overlay', function(Overlay) {
    var o2 = new Overlay({
        element: '#b',
        width: 100,
        align: {
            baseXY: [200, 0]
        }
    });
    o2.show();
});
```

## 3. 点击文档其他地方隐藏自身

<div id="d1_trigger" style="width:150px;height:30px;background:#ccc;">点击我显隐元素3</div>
<div id="d1" class="example" style="display:none;">目标元素3，点击页面空白处我会消失</div>

<div id="d2_trigger" style="width:150px;height:30px;background:#e80;color:#fff;">点击我显隐元素4</div>
<div id="d2" class="example" style="display:none;">目标元素4，点击页面空白处我会消失</div>

```javascript
seajs.use(['../src/overlay', '$'], function(Overlay, $) {
    var testPopup = Overlay.extend({
        attrs : {
            trigger: null
        },
        setup: function() {
            var that = this;
            testPopup.superclass.setup.call(this);
            this._setPosition();
            $(this.get('trigger')).click(function() {
                that.show();
            });
            this._blurHide([this.get('trigger')]); 
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
});
```
