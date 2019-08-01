kontra.init();

var sprite = kontra.sprite({
  x: 100,
  y: 50,
  width: 50,
  height: 100,
  color: "green",
  dx: 1,
  dy: 0.5
});

var loop = kontra.gameLoop({
  update: function() {
    sprite.update();
    console.log(sprite.x);

    if (sprite.x + sprite.width == 256) {
      sprite.dx = -1;
    } else if (sprite.x == 0) {
      sprite.dx = 1;
    }

    if (sprite.y + sprite.height == 256) {
      sprite.dy = -0.5;
    } else if (sprite.y == 0) {
      sprite.dy = 0.5;
    }
  },

  render: function() {
    sprite.render();
  }
});

loop.start();
