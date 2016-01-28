define(['Class'], function (Class) {
    return Class.extend({
        bindApp: function (instance) {
            this.app = instance;
        },
        keyMap: {
            enter: 13,
            w: 87,
            a: 65,
            s: 83,
            d: 68
        },
        eventTypes: {
            keyDown: 'keydown',
            keyUp: 'keyup'
        },
        handle: function (type, evt) {
            var screen = this.app.getCurrentScreen();
            if (screen) {
                screen.handleInput(type, evt);
            }
        }
    });
});