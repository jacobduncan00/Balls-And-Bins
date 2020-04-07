function Bin(x, y, w, h) {
  var options = {
    // Allows the bins to stay in place
    isStatic: true,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  // Keep track of width and height
  this.w = w;
  this.h = h;
  World.add(world, this.body);
}

Bin.prototype.show = function () {
  fill("red");
  stroke(255);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  // Makes rect longer in height
  rectMode(CENTER);
  rect(0, 0, this.w, this.h);
  pop();
};
