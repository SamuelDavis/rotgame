define(["Class", "screens/start"], function (Class, StartScreen) {
    return Class.extend({
        init: function (displayInstance, inputInstance, width, height) {
            this.display = displayInstance;
            this.input = inputInstance;
            this.currentScreen = null;
            this.width = width;
            this.height = height;
            this.switchScreen(new StartScreen(this, this.input));
        },
        getWidth: function () {
            return this.width;
        },
        getHeight: function () {
            return this.height;
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
