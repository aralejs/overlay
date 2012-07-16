1. 显示默认遮罩层：mask.show();

<button id="a">点击显示默认遮罩层</button>

```javascript
seajs.use('../src/mask', function(mask) {

    document.getElementById('a').onclick = function() {
        mask.show();
    };

});
```

2. 显示修改的遮罩层：mask.set('backgroundColor', 'green').set('opacity', '0.3').show();;

<button id="b">点击显示修改的遮罩层</button>

```javascript
seajs.use('../src/mask', function(mask) {

    document.getElementById('b').onclick = function() {
        mask.set('backgroundColor', 'green').set('opacity', '0.3').show();
    };

});
```


