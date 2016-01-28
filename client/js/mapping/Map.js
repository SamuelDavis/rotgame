define(['Class', 'ROT', 'mapping/tile'], function (Class, ROT, Tile) {
    var tiles, width, height;

    var Map = Class.extend({
        init: function (tileMap) {
            tiles = tileMap;
            width = tileMap[0].length;
            height = tileMap.length;
        },
        getWidth: function () {
            return width;
        },
        getHeight: function () {
            return height;
        },
        getTile: function (x, y) {
            if (x < 0 || x > width || y < 0 || y > height) {
                return Tile.NULL();
            }

            return tiles[y][x] || Tile.NULL();
        }
    });
    Map.generate = function (width, height) {
        width = width || ROT.DEFAULT_WIDTH;
        height = height || ROT.DEFAULT_HEIGHT;

        var x, y, tiles = [];

        for (y = 0; y < height; y++) {
            tiles.push([]);
            for (x = 0; x < width; x++) {
                tiles[y].push(Tile.NULL());
            }
        }

        return tiles;
    };
    Map.Cellular = function (width, height) {
        var tiles = this.generate(width, height),
            generator = new ROT.Map.Cellular(tiles[0].length, tiles.length),
            totalIterations = 3,
            i;
        generator.randomize(0.5);

        for (i = 0; i < totalIterations - 1; i++) {
            generator.create();
        }
        generator.create(function (x, y, v) {
            if (v === 0) {
                tiles[y][x] = Tile.FLOOR();
            } else {
                tiles[y][x] = Tile.WALL();
            }
        });

        return new Map(tiles);
    };

    return Map;
});