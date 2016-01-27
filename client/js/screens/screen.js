define(["Class"], function (Class) {
    return Class.extend({
        init: function (game, input) {
            this.game = game;
            this.input = input;

            console.log(this);
        },
        enter: function () {
            console.log("Enter screen");
        },
        exit: function () {
            console.log("Exit screen");
        },
        render: function (display) {
            console.log("Render screen");
        },
        handleInput: function (type, input) {
            console.log("Handle input");
        }
    });
});