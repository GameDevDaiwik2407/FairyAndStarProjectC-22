var starImg, bgImg;
var star, starBody;
var fairy, fairyImage;

// declaring the variable for sound
var fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  // loading images
  starImg = loadImage("images/star.png");
  bgImg = loadImage("images/starNight.png");
  fairyImage = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");

  // loading the sound
  fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

  //write code to play fairyVoice sound
  fairyVoice.loop();

  //create fairy sprite and add animation for fairy
  fairy = createSprite(200, 600, 20, 20);
  fairy.addAnimation("fairyMoving", fairyImage);
  fairy.scale = 0.2;
  
  star = createSprite(650, 30);
  star.addImage(starImg);
  star.scale = 0.2;
  
  engine = Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650, 30, 5, {
    restitution: 0.5,
    isStatic: true
  });
  World.add(world, starBody);

  Engine.run(engine);
}

function draw() {
  background(bgImg);

  star.x = starBody.position.x
  star.y = starBody.position.y
  
  if (star.y >= 100 && starBody.position.y >= 565) {
    Matter.Body.setStatic(starBody, true);
  }

  drawSprites();
}

function keyPressed() {

  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(starBody, false);
  }

  //write code to move fairy left and right
  if (keyCode === RIGHT_ARROW) {
    fairy.x = fairy.x + 20;
  }

  if (keyCode === LEFT_ARROW) {
    fairy.x = fairy.x - 20;
  }
}