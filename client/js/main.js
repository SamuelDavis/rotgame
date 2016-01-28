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
require(['ROT', 'lodash', 'app', "systems/display/display", "systems/input"], function (ROT, _, App, Display, Input) {
    var app, display, input, width, height;

    if (!ROT.isSupported()) {
        alert("The rot.js library isn't supported in your browser.");
    } else {
        width = height = 25;
        display = new Display({width: width, height: height, forceSquareRatio: true});
        input = new Input();
        app = new App(display, input, width, height);
        input.bindApp(app);

        _.each(input.eventTypes, function (event) {
            window.addEventListener(event, function (e) {
                input.handle(event, e);
            });
        });

        document.body.appendChild(app.getDisplay().getContainer());
    }
});