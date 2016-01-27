require.config({
    baseUrl: "./js",
    paths: {
        lodash: "lib/lodash",
        ROT: "lib/rot",
        Class: "lib/class"
    },
    shim: {
        ROT: {
            exports: "ROT"
        },
        lodash: {
            exports: "lodash"
        },
        Class: {
            exports: "Class"
        }
    }
});
require(['ROT', 'lodash', 'app'], function (ROT, _, App) {
    var app;

    if (!ROT.isSupported()) {
        alert("The rot.js library isn't supported in your browser.");
    } else {
        app = new App();
        document.body.appendChild(app.getDisplay().getContainer());
        _.each(['keydown', 'keyup'], function (event) {
            window.addEventListener(event, function (e) {
                // When an event is received, send it to the
                // screen if there is one
                var screen = app.getCurrentScreen();
                if (screen) {
                    // Send the event type and data to the screen
                    screen.handleInput(event, e);
                }
            });
        });
    }
});