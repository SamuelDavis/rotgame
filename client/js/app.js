define(["Class", "systems/display", "systems/input", "screens/start"], function (Class, Display, Input, StartScreen) {
    var display, currentScreen;
    var input = new Input();

    return Class.extend({
        init: function () {
            display = new Display();
            this.switchScreen(new StartScreen(this, input));
        },
        getDisplay: function () {
            return display;
        },
        getCurrentScreen: function () {
            return currentScreen;
        },
        switchScreen: function (newScreen) {
            if (currentScreen) {
                currentScreen.exit();
            }

            currentScreen = newScreen;
            currentScreen.enter();
        }
    })
});
