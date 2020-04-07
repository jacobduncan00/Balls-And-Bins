function Ball(x, y, r) {
  var options = {
    // This part adds "bounce" to the dropping balls
    restitution: 0.5,
    friction: 0,
    density: 1,
  };
  this.body = Bodies.circle(x, y, r, options);
  // Keeping track of radius
  this.r = r;
  World.add(world, this.body);
}

Ball.prototype.show = function () {
  // Pink
  fill("#fae");
  noStroke();
  // Keep track of position of each dropping ball
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2);
  pop();
};
