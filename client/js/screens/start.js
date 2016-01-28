define(["screens/screen", "screens/play", "../mapping/map"], function (Screen, Play, Map) {
    return Screen.extend({
        enter: function () {
            console.log("Enter start screen");
        },
        exit: function () {
            console.log("Exit start screen");
        },
        render: function (display) {
            console.log("Render start screen");
            display.drawText(0, 0, "Press [Enter] to start.");
        },
        handleInput: function (type, input) {
            console.log("Handle start input: " + type + ' :: ' + input.keyCode);
            switch (type) {
                case "keydown":
                    switch (input.keyCode) {
                        case this.input.keyMap.enter:
                            var playScreen = new Play(this.game, this.input, Map.Cellular(160, 50));
                            this.game.switchScreen(playScreen);
                            break;
                    }
                    return;
            }
        }
    });
});
