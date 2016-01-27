define(["screens/screen", "ROT"], function (Screen) {
    return Screen.extend({
        enter: function () {
            console.log("Enter play screen");
        },
        exit: function () {
            console.log("Exit play screen");
        },
        render: function (display) {
            console.log("Render play screen");
            display.drawText(0, 0, "Press [Enter] to play.");
        },
        handleInput: function (type, input) {
            console.log("Handle play input: " + type + ' :: ' + input.keyCode);
        }
    });
});
