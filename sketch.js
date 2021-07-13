var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var arrowsGroup,pink_balloonGroup,green_balloonGroup,red_balloonGroup,blue_balloonGroup,balloonGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
 
 
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  pink_balloonGroup = new Group();
  green_balloonGroup = new Group();
  red_balloonGroup = new Group();
  blue_balloonGroup = new Group();
  arrowsGroup = new Group();
  balloonGroup = new Group()
 
} 



function draw() {
 background("black");

    if(gameState == PLAY){
      scene.velocityX = -3 
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
     bow.y = World.mouseY;
    if (keyDown("space")) {
      createArrow(); 
    }
    var select_balloon = Math.round(random(1,4));
  
    if (World.frameCount % 100 == 0) {
       switch(select_balloon) {
         case 1 :
           select_balloon == 1
           redBalloon();
           break;
         case 2 :
          select_balloon == 2
          blueBalloon();
          break;
         case 2 :
          select_balloon == 3
          greenBalloon();
          break;
         case 3 :
           select_balloon == 4
           pinkBalloon();
           break;
   }
  }
   if(arrowsGroup.isTouching(red_balloonGroup)){
     arrowsGroup.destroyEach();
     red_balloonGroup.destroyEach();
     score += 1
   }
   if(arrowsGroup.isTouching(green_balloonGroup)){
    arrowsGroup.destroyEach();
    green_balloonGroup.destroyEach();
    score += 2;
  }
  if(arrowsGroup.isTouching(blue_balloonGroup)){
    arrowsGroup.destroyEach();
    blue_balloonGroup.destroyEach();
    score += 3
  }
  if(arrowsGroup.isTouching(pink_balloonGroup)){
    arrowsGroup.destroyEach();
    pink_balloonGroup.destroyEach();
    score += 4
  }
 } else if(gameState == END){
   bow.velocityY = 0;
   arrowsGroup.setVelocityXEach(0);
   pink_balloonGroup.setVelocityXEach(0);
   green_balloonGroup.setVelocityXEach(0);
   red_balloonGroup.setVelocityXEach(0);
   blue_balloonGroup.setVelocityXEach(0);
   }

drawSprites();
textSize(20);
text("Score :"+ score ,300,20);
}


// Creating  arrows for bow
function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowsGroup.add(arrow);
  arrow.setCollider("circle",0,0,40);
  arrow.debug = false;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 4;
  red.lifetime = 150;
  red.scale = 0.1;
  red_balloonGroup.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 380)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blue_balloonGroup.add(blue);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 380)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 4;
  green.lifetime = 150;
  green.scale = 0.1;
  green_balloonGroup.add(green);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 380)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 150;
  pink.scale = 1.3;
  pink_balloonGroup.add(pink);
}
      
