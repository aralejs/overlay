define(function(require) {

    var Overlay = require('overlay');
    var Position = require('position');
    var $ = require('$');
    var expect = require('expect');
    var sinon = require('sinon');

    describe('overlay', function() {

        var overlay;

        beforeEach(function() {
            overlay = new Overlay({
                template: '<div></div>',
                width: 120,
                height: 110,
                zIndex: 90,
                id: 'overlay',
                className: 'ui-overlay',
                visible: false,
                style: {
                    color: '#e80',
                    backgroundColor: 'green',
                    paddingLeft: '11px',
                    fontSize: '13px'
                },
                align: {
                    selfXY: [0, 0],
                    baseElement: document.body,
                    baseXY: [100, 100]
                }
            });
            overlay.render();
        });

        afterEach(function() {
            if (overlay && overlay.element) {
                overlay.hide();
                overlay.destroy();
            }
        });

        it('基本属性', function() {
            expect(overlay.element.attr('id')).to.equal('overlay');
            expect(overlay.element.hasClass('ui-overlay')).to.equal(true);
            expect(overlay.element.css('width')).to.equal('120px');
            expect(overlay.element.css('height')).to.equal('110px');
            expect(parseInt(overlay.element[0].style.zIndex)).to.equal(90);
            expect(overlay.get('visible')).to.equal(false);
            expect(['#e80', 'rgb(238, 136, 0)']).to.contain(overlay.element.css('color'));
            expect(['green', 'rgb(0, 128, 0)']).to.contain(overlay.element.css('background-color'));
            expect(overlay.element.css('padding-left')).to.equal('11px');
            expect(overlay.element.css('font-size')).to.equal('13px');
        });

        it('默认属性', function() {
            overlay.hide().destroy();
            overlay = new Overlay({
                template: '<div></div>'
            }).render();
            expect(overlay.element[0].id).to.equal('');
            expect(overlay.element[0].className).to.equal('');
            expect(overlay.element.width()).to.equal(0);
            expect(parseInt(overlay.element[0].style.zIndex)).to.equal(99);
            expect(overlay.get('visible')).to.equal(false);
            expect(overlay.get('style')).to.eql(null);

        });

        it('align 设置', function() {
            expect(overlay.get('align').selfXY[0]).to.equal(0);
            expect(overlay.get('align').selfXY[1]).to.equal(0);
            expect(overlay.get('align').baseElement).to.equal(document.body);
            expect(overlay.get('align').baseXY[0]).to.equal(100);
            expect(overlay.get('align').baseXY[1]).to.equal(100);
        });

        it('align 默认', function() {
            overlay.hide().destroy();
            overlay = new Overlay({
                template: '<div></div>'
            }).render();
            expect(overlay.get('align').selfXY[0]).to.equal(0);
            expect(overlay.get('align').selfXY[1]).to.equal(0);
            expect(overlay.get('align').baseElement._id).to.equal('VIEWPORT');
            expect(overlay.get('align').baseXY[0]).to.equal(0);
            expect(overlay.get('align').baseXY[1]).to.equal(0);
        });

        it('设置属性', function() {
            overlay.set('style', {
                backgroundColor: 'red'
            });
            overlay.set('width', 300);
            overlay.set('height', 400);
            overlay.set('zIndex', 101);
            overlay.set('id', 'myid');
            overlay.set('className', 'myclass');
            overlay.set('visible', true);

            expect(overlay.element.css('width')).to.equal('300px');
            expect(overlay.element.css('height')).to.equal('400px');
            expect(parseInt(overlay.element[0].style.zIndex)).to.equal(101);
            expect(['red', 'rgb(255, 0, 0)']).to.contain(overlay.element.css('background-color'));
            expect(overlay.element.attr('id')).to.equal('myid');
            expect(overlay.element.hasClass('myclass')).to.equal(true);
            expect(overlay.element.is(':hidden')).to.equal(false);
        });

        it('显示隐藏', function() {
            overlay.show();
            expect(overlay.get('visible')).to.equal(true);
            expect(overlay.element.is(':hidden')).to.equal(false);

            overlay.hide();
            expect(overlay.get('visible')).to.equal(false);
            expect(overlay.element.is(':hidden')).to.equal(true);
        });

        it('Overlay.allOverlays', function() {
            overlay.hide().destroy();
            var num = Overlay.allOverlays.length;

            overlay = new Overlay();
            expect(Overlay.allOverlays.length).to.be(num+1);
            expect(Overlay.allOverlays[num]).to.be(overlay);
            overlay.destroy();
            expect(Overlay.allOverlays.length).to.be(num);
        });

        it('Overlay.blurOverlays', function() {
            overlay.hide().destroy();
            var num = Overlay.blurOverlays.length;
            overlay = new Overlay();
            overlay._blurHide();
            expect(Overlay.blurOverlays.length).to.be(num+1);
            expect(Overlay.blurOverlays[num]).to.be(overlay);
            overlay.destroy();
            expect(Overlay.blurOverlays.length).to.be(num);
        });

        it('setPosition', function(done) {
            overlay.hide().destroy();
            overlay = new Overlay();
            var setPosition = sinon.spy(overlay, '_setPosition');
            expect(setPosition.called).not.to.be.ok();
            overlay.render();
            expect(setPosition.callCount).to.be(1);
            overlay.show();
            expect(setPosition.callCount).to.be(2);
            setTimeout(function() {
                expect(setPosition.callCount).to.be(2);
                done();
            }, 100);
        });

        it('set align to null', function() {
            overlay.hide().destroy();
            overlay = new Overlay({
                align: null
            });
            var pin = sinon.spy(Position, 'pin');
            overlay.show();
            expect(pin.called).not.to.be.ok();
        });

        it("隐藏元素的 Overlay", function() {
            overlay.hide().destroy();
            var element = $('<div style="display: none;">我是看不见的 Overlay</div>').appendTo("body");
            overlay = new Overlay({
                element: element,
                //template: '<div style="display: none;">我是看不见的 Overlay</div>',
                width: 120,
                height: 110,
                align: {
                    selfXY: [0, 0],
                    baseXY: [100, 100]
                }
            }).render();
            expect(overlay.get('visible')).to.equal(false);
            overlay.show();
            expect(overlay.element.offset().left).to.eql(100);
            expect(overlay.element.offset().top).to.eql(100);
        });

        it("_blurHide", function () {
            overlay.hide().destroy();

            var testPopup = Overlay.extend({
                attrs: {
                    trigger: null
                },
                setup: function () {
                    var that = this;
                    testPopup.superclass.setup.call(this);
                    $(this.get('trigger')).click(function () {
                        that.show();
                    });
                    this._blurHide(this.get('trigger'));
                }
            });
            overlay = new testPopup({
                trigger: $("<a >点击我</a>").appendTo("body"),
                template: '<div>我是 Overlay</div>'
            });

            overlay.get("trigger").click();

            expect(overlay.get("visible")).to.equal(true);


            var hide = sinon.spy(overlay, 'hide');

            overlay.set("visible", false);

            $("body").click();
            expect(hide.called).not.to.be.ok();

            overlay.set("visible", true);
            $("body").click();
            expect(hide.callCount).to.be(1);
            overlay.get("trigger").off().remove();
        });

        xit('setPosition when resize', function(done) {
            overlay.hide().destroy();
            overlay = new Overlay();
            var setPosition = sinon.spy(overlay, '_setPosition');
            expect(setPosition.called).not.to.be.ok();
            overlay.render();
            expect(setPosition.callCount).to.be(1);
            overlay.show();
            expect(setPosition.callCount).to.be(2);

            $(window).resize();

            setTimeout(function() {
                expect(setPosition.callCount).to.be(3);

                overlay.set("visible", false);

                $(window).resize();

                setTimeout(function () {
                    expect(setPosition.callCount).to.be(3);
                    done();
                }, 100);
            }, 100);
        });
    });
});

