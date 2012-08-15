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

目标元素2，宽80高30，位置为可视区域top:300 left:200。

<div id="b" class="example">目标元素2</div>

```javascript
seajs.use('../src/overlay', function(Overlay) {
    var o2 = new Overlay({
        element: '#b',
        width: 100,
        align: {
            baseXY: [200, 300]
        }
    });
    o2.show();
});
```

