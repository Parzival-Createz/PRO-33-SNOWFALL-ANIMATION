const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop = [];
var r, bgImg, spriteImg;

function preload() {
  r = Math.round(random(1, 9))
  if (r % 3 === 1) {
    bgImg = loadImage("snow1.jpg");
  } else if (r % 3 === 2) {
    bgImg = loadImage("snow2.jpg");
  } else if (r % 3 === 0) {
    bgImg = loadImage("snow3.jpg");
  } else {
    bgImg = loadImage("snow3.jpg");
  }

}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  //   createSprite(400, 200, 50, 50);

  for (var i = 0; i < 15; i++) {
    drop.push(new Snow(random(0, 800), random(0, 400)));
  }

}

function draw() {
  background(bgImg);
  Engine.update(engine);

  drawSprites();
  for (var i = 0; i < 15; i++) {
    drop[i].display();
    drop[i].update();
  }
}