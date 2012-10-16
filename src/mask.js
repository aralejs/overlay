define(function(require, exports, module) {

    var $ = require('$'),
        Overlay = require('./overlay'),
        isIE6 = ($.browser || 0).msie && $.browser.version == 6.0,
        body = $(document.body),
        doc = $(document),
		defaultStyle = {
			opacity: .2,
			backgroundColor: '#000',
		};


    // Mask
    // ----------
    // 全屏遮罩层组件

    var Mask = Overlay.extend({

        attrs: {
            width: isIE6 ? doc.outerWidth(true) : '100%',
            height: isIE6 ? doc.outerHeight(true) : '100%',

            className: 'ui-mask',

            style: $.extend({
                position: isIE6 ? 'absolute' : 'fixed'
            }, defaultStyle),

            align: {
                // undefined 表示相对于当前可视范围定位
                baseElement: isIE6 ? body : undefined
            }
        },

        show: function(style) {
            if (isIE6) {
                this.set('width', doc.outerWidth(true));
                this.set('height', doc.outerHeight(true));
            }

			// 如果有指定样式，设置成指定样式，否则还原成默认样式
			this.set(style || defaultStyle);

            return Mask.superclass.show.call(this);
        },

        setup: function() {
            // 加载 iframe 遮罩层并与 overlay 保持同步
            this._setupShim();
        },

        _onRenderBackgroundColor: function(val) {
            this.element.css('backgroundColor', val);
        },

        _onRenderOpacity: function(val) {
            this.element.css('opacity', val);
        }
    });

    // 单例
    module.exports = new Mask();

});
