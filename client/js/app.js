define(["Class", "screens/start"], function (Class, StartScreen) {
    var display, input, currentScreen;

    return Class.extend({
        init: function (displayInstance, inputInstance) {
            display = displayInstance;
            input = inputInstance;
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
