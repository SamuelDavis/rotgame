define(["screens/screen", "ROT"], function (Screen) {
    return Screen.extend({
        init: function (game, input, mapInstance) {
            this._super(game, input);
            this.map = mapInstance;
            this.tlX = 0;
            this.tlY = 0;
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
            var x, y, glyph,
                screenWidth = display.getOptions().width,
                screenHeight = display.getOptions().height;


            display.clear();
            for (x = this.tlX; x < this.tlX + screenWidth; x++) {
                for (y = this.tlY; y < this.tlY + screenHeight; y++) {
                    glyph = this.map.getTile(x, y).getGlyph();
                    display.draw(
                        x - this.tlX,
                        y - this.tlY,
                        glyph.getChar(),
                        glyph.getForeground(),
                        glyph.getBackground()
                    );
                }
            }

            display.draw(
                Math.floor(screenWidth / 2),
                Math.floor(screenHeight / 2),
                '@',
                'goldenrod',
                'black'
            );
        },
        handleInput: function (type, input) {
            console.log("Handle play input: " + type + ' :: ' + input.keyCode);
            if (type !== this.input.eventTypes.keyDown) {
                return;
            }
            switch (input.keyCode) {
                case this.input.keyMap.w:
                    this.move(0, -1);
                    break;
                case this.input.keyMap.a:
                    this.move(-1, 0);
                    break;
                case this.input.keyMap.s:
                    this.move(0, +1);
                    break;
                case this.input.keyMap.d:
                    this.move(+1, 0);
                    break;
            }

            this.render(this.game.getDisplay());
        },
        move: function (dX, dY) {
            var display = this.game.getDisplay(),
                screenWidth = display.getOptions().width,
                screenHeight = display.getOptions().height,
                mapWidth = this.map.getWidth(),
                mapHeight = this.map.getHeight();

            this.tlX += dX;
            this.tlY += dY;
            this.tlX = this.tlX >= 0 ? this.tlX : 0;
            this.tlY = this.tlY >= 0 ? this.tlY : 0;
            this.tlX = this.tlX + screenWidth < mapWidth ? this.tlX : mapWidth - screenWidth;
            this.tlY = this.tlY + screenHeight < mapHeight ? this.tlY : mapHeight - screenHeight;
        }
    });
});
