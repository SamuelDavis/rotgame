define(["screens/screen", "ROT"], function (Screen) {
    var map;

    return Screen.extend({
        init: function (game, input, mapInstance) {
            this._super(game, input);
            map = mapInstance;
        },
        enter: function () {
            console.log("Enter play screen");
            this.render(this.game.getDisplay());
        },
        exit: function () {
            console.log("Exit play screen");
        },
        render: function (display) {
            console.log("Render play screen");
            var x, y, glyph;

            for (x = 0; x < map.getWidth(); x++) {
                for (y = 0; y < map.getHeight(); y++) {
                    glyph = map.getTile(x, y).getGlyph();
                    display.draw(x, y, glyph.getChar(), glyph.getForeground(), glyph.getBackground());
                }
            }
        },
        handleInput: function (type, input) {
            console.log("Handle play input: " + type + ' :: ' + input.keyCode);
        }
    });
});
