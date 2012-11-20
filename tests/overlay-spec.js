define(function(require) {

    var Overlay = require('../src/overlay');
    var $ = require('$');
    var ie678 = $.browser.msie && $.browser.version <= 8;

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
            overlay.hide();
            overlay.destroy();
        });

        it('基本属性', function() {
            expect(overlay.element.attr('id')).to.equal('overlay');
            expect(overlay.element.hasClass('ui-overlay')).to.equal(true);
            expect(overlay.element.css('width')).to.equal('120px');
            expect(overlay.element.css('height')).to.equal('110px');
            expect(parseInt(overlay.element[0].style.zIndex)).to.equal(90);
            expect(overlay.get('visible')).to.equal(false);
            if (ie678) {
                expect(overlay.element.css('color')).to.equal('#e80');
                expect(overlay.element.css('background-color')).to.equal('green');
            }
            else {
                expect(overlay.element.css('color')).to.equal('rgb(238, 136, 0)');
                expect(overlay.element.css('background-color')).to.equal('rgb(0, 128, 0)');
            }
            expect(overlay.element.css('padding-left')).to.equal('11px');
            expect(overlay.element.css('font-size')).to.equal('13px');
            expect(overlay.get('align').selfXY[0]).to.equal(0);
            expect(overlay.get('align').selfXY[1]).to.equal(0);
            expect(overlay.get('align').baseElement).to.equal(document.body);
            expect(overlay.get('align').baseXY[0]).to.equal(100);
            expect(overlay.get('align').baseXY[1]).to.equal(100);
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
            expect(overlay.get('style')).to.eql({});

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
            if (ie678) {
                expect(overlay.element.css('background-color')).to.equal('red');
            }
            else {
                expect(overlay.element.css('background-color')).to.equal('rgb(255, 0, 0)');
            }
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

    });
});

