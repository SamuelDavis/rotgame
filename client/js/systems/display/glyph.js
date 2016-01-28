define(['Class', 'systems/display/color'], function (Class, color) {
    var chr, foreground, background;

    return Class.extend({
        init: function (char, fore, back) {
            chr = char || '?';
            foreground = fore || color.white;
            background = back || color.black;
        },
        getChar: function () {
            return chr;
        },
        getForeground: function () {
            return foreground;
        },
        getBackground: function () {
            return background;
        }
    });
});