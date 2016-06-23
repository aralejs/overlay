"use strict";

var $ = require("jquery");
var Overlay = require("./overlay");
var body = $(document.body);
var doc = $(document);

// Mask
// ----------
// 全屏遮罩层组件
var Mask = Overlay.extend({

  attrs: {
    width: '100%',
    height: '100%',

    className: 'ui-mask',
    opacity: 0.2,
    backgroundColor: '#000',
    style: {
      position: 'fixed',
      top: 0,
      left: 0
    },

    align: {
      // undefined 表示相对于当前可视范围定位
      baseElement: undefined
    }
  },

  show: function show() {
    return Mask.superclass.show.call(this);
  },

  _onRenderBackgroundColor: function _onRenderBackgroundColor(val) {
    this.element.css('backgroundColor', val);
  },

  _onRenderOpacity: function _onRenderOpacity(val) {
    this.element.css('opacity', val);
  }
});

// 单例
module.exports = new Mask();