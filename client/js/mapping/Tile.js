define(['Class', 'systems/display/glyph'], function (Class, Glyph) {
    var Tile = Class.extend({
        init: function (glyphInstance) {
            this.glyph = glyphInstance;
        },
        getGlyph: function () {
            return this.glyph;
        }
    });
    Tile.NULL = function () {
        return new Tile(new Glyph(' '));
    };
    Tile.FLOOR = function () {
        return new Tile(new Glyph('.'));
    };
    Tile.WALL = function () {
        return new Tile(new Glyph('#'));
    };

    return Tile;
});