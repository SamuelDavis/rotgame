define(['Class'], function (Class) {
    var app;

    return Class.extend({
        bindApp: function (instance) {
            app = instance;
        },
        getMap: function () {
            return {
                enter: 13
            };
        },
        eventTypes: {
            keyDown: 'keydown',
            keyUp: 'keyup'
        },
        handle: function (type, evt) {
            var screen = app.getCurrentScreen();
            if (screen) {
                screen.handleInput(type, evt);
            }
        }
    });
});