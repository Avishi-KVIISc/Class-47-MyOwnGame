var karanStanding, karanRunning, karan; 
var bgImg, box, boxImg, treasure, treasureImg, door, doorImg;
var kumbh, kumbhWalking, kumbhPushing;
var ground1, ground2, ground3, groundGroup;
var gameState = "start";
var backgroundVar;

function preload(){
  karanStanding = loadAnimation("KaranStanding1.png");
  storyImg = loadImage("Story.png");
  bgImg = loadImage("backgroundImg.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  form = new Form();

  groundGroup = new Group();

  ground1 = new Ground(250, 700, 250, 60);
  ground2 = new Ground(700, 650, 250, 60);
  ground3 = new Ground(1170, 500, 250, 60);  

  karan = createSprite(100, 620);
  karan.addAnimation("standing", karanStanding);

  backgroundVar = createSprite(windowWidth/2, windowHeight/2);
}

function draw() {

  if(gameState === "start"){
    form.display();
  } 
  else if (gameState === "story"){
    //image(this.storyImg, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    //background(form.storyImg);
    backgroundVar.addImage(storyImg);
    backgroundVar.scale = 3;
    setTimeout(function(){gameState = "play";}, 2000);
    drawSprites();
  }

  else if (gameState === "play"){
    backgroundVar.destroy();
    imageMode(CORNERS);
  background(bgImg);
  //backgroundVar.addImage(bgImg);

  if(keyDown(RIGHT_ARROW)){
    karan.x += 5
  }

  if(keyDown("up")){
    karan.velocityY = -10;
  }

  karan.velocityY += 1;
  karan.collide(groundGroup);
  
  ground1.display();
  ground2.display();
  ground3.display();

  drawSprites();
}
}