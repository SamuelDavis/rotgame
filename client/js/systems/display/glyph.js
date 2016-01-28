define(['Class', 'systems/display/color'], function (Class, color) {
    return Class.extend({
        init: function (char, fore, back) {
            this.chr = char || '?';
            this.foreground = fore || color.white;
            this.background = back || color.black;
        },
        getChar: function () {
            return this.chr;
        },
        getForeground: function () {
            return this.foreground;
        },
        getBackground: function () {
            return this.background;
        }
    });
});