define(["screens/screen", "screens/play"], function (Screen, Play) {
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
                        case this.input.getMap().enter:
                            this.game.switchScreen(new Play(this.game, this.input));
                            break;
                    }
                    return;
            }
        }
    });
});
