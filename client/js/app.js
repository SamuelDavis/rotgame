define(["Class", "screens/start"], function (Class, StartScreen) {
    return Class.extend({
        init: function (displayInstance, inputInstance) {
            this.display = displayInstance;
            this.input = inputInstance;
            this.currentScreen = null;
            this.switchScreen(new StartScreen(this, this.input));
        },
        getDisplay: function () {
            return this.display;
        },
        getCurrentScreen: function () {
            return this.currentScreen;
        },
        switchScreen: function (newScreen) {
            if (this.currentScreen) {
                this.currentScreen.exit();
            }

            this.currentScreen = newScreen;
            this.currentScreen.enter();
        }
    })
});
