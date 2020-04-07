// Matter-js startup stuff
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var engine;
var world;
// End Matter-js startup stuff

var balls = [];
var pegs = [];
var bins = [];
var cols = 11;
var rows = 10;

function setup() {
  createCanvas(600, 700);
  engine = Engine.create();
  world = engine.world;

  function collision(event) {
    var pairs = event.pairs;
  }

  // Start physics "collisions" to begin
  Events.on(engine, "collisionStart", collision);

  // Set spacing between pegs
  var spacing = width / cols;
  var colsPlus1 = cols + 1;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < colsPlus1; i++) {
      var x = i * spacing;
      // Shifts every other row to be between above row
      if (j % 2 == 0) {
        x += spacing / 2;
      }
      var y = spacing + j * spacing;
      // Initializes Pegs
      var p = new Peg(x, y, 16);
      // Pushes peg to array to be rendered
      pegs.push(p);
    }
  }

  // Creating a new bin on the bottom of the board so that the balls can be held
  // in the vertical walls
  var floor = new Bin(width / 2, height + 50, width, 100);
  bins.push(floor);

  // Generates vertical walls or "bins" that divide the balls once they reach the bottom
  // of the board
  for (var i = 0; i < cols + 2; i++) {
    var x = i * spacing;
    var h = 100;
    var w = 10;
    var y = height - h / 2;
    var newWall = new Bin(x, y, w, h);
    bins.push(newWall);
  }
}

// Creates a ball-spawning area in the top middle
function newBall() {
  var ball = new Ball(300, 0, 10);
  balls.push(ball);
}

// Creates a ball-spawning area in the top left
function newBall2() {
  var ball = new Ball(100, 0, 10);
  balls.push(ball);
}

// Creates a ball-spawning area in the top right
function newBall3() {
  var ball = new Ball(500, 0, 10);
  balls.push(ball);
}

// Function that chooses a random location at the top to spawn a ball from
function randBall() {
  var randomLocation = Math.floor(Math.random() * 601) + 30;
  var ball = new Ball(randomLocation, 0, 10);
  balls.push(ball);
}

function testDrop() {
  var testLocation = 600;
  var ball = new Ball(testLocation, 0, 10);
  balls.push(ball);
}

function numOfBalls() {
  let num = prompt("How many balls would you like to drop?");
  return num;
}

let num = numOfBalls();
let counter = 0;

function draw() {
  background(0, 0, 0);
  if (frameCount % 60 == 0 && counter < num) {
    // You can choose what side you want the balls to drop from
    // 1. newBall() = middle
    // 2. newBall2() = left
    // 3. newBall3() = right
    // 4. randBall() = random
    randBall();
    counter++;
  }

  // Matter-js updating engine to re-render physics
  Engine.update(engine, 1000 / 30);

  // Print all pegs
  for (var i = 0; i < pegs.length; i++) {
    pegs[i].show();
  }

  // Print all bins
  for (var i = 0; i < bins.length; i++) {
    bins[i].show();
  }

  // Show each ball spawned
  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
  }
}
