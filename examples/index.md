<style>
.parent{
    position:relative;
    float:right;
    border:1px solid #ccc;
}
.example2 {
    color: #fff;
    background-color: red;
    border:1px solid #ccc;
}
</style>

目标元素1定位在基准元素1的右边，高宽分别为30，底色红色。

<div id="c" class="parent">目标元素1的父节点</div>
<div id="a">基准元素1</div>

```javascript
seajs.use('../src/overlay', function(Overlay) {
    var o = new Overlay({
        template: '<div class="overlay">目标元素1</div>',
        height: 30,
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
        backgroundColor: 'red'
    });
    o.set('width', 100);
});
```

目标元素2，宽80高30，位置为可视区域top:300 left:100。

<div id="b" class="example2">目标元素2</div>

```javascript
seajs.use('../src/overlay', function(Overlay) {

    var o2 = new Overlay({
        element: '#b',
        width: 80,
        height: 30,
        align: {
            baseXY: [100, 300]
        }
    });
    o2.show();
});
```

