kontra.init();

kontra.assetPaths.images = "assets/images/";

let image = new Image();

kontra
  .loadAssets("map3.png", "runright1.png", "runleft1.png", "run.png")
  .then(function() {
    var background = kontra.sprite({
      x: 0,
      y: 0,
      image: kontra.images.map3
    });

    var player = kontra.sprite({
      x: 50,
      y: 50,
      image: kontra.images.runright1
    });

    var loop = kontra.gameLoop({
      update: function() {
        if (kontra.keys.pressed("up")) {
          player.y -= 1;
        }

        if (kontra.keys.pressed("down")) {
          player.y += 1;
        }

        background.update();
        player.update();
      },

      render: function() {
        background.render();
        player.render();
      }
    });

    loop.start();
  });
