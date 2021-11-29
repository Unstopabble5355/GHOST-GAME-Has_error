var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var gameState="end";
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
 doorsGroup= new Group(); 
 climbersGroup=new Group();
invisibleBlockGroup= new Group();
 ghost=createSprite(200,200,50,50);
 ghost.addImage("ghost",ghostImg);
 ghost.scale=0.3;

}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    
    if(keyDown("space")){
ghost.velocityY=-5;
    }
    ghost.velocityY=ghost.velocityY+0.5;
    
    
  if(keyDown("LEFT_ARROW")){
ghost.x=ghost.x-3;
  }

if(keyDown("RIGHT_ARROW")){
ghost.x=ghost.x+3;
}

    spawndoors();
    drawSprites();
 
  }
function spawndoors(){
if(frameCount%240===0){
door=createSprite(200,-50);
door.addImage(doorImg);
door.velocityY=1;
door.x=Math.round(random(120,400));
door.lifetime=800;
doorsGroup.add(door);

climber=createSprite(200,10);
climber.addImage(climberImg);
climber.velocityY=1;
climber.x=door.x;
climber.lifetime=800;
climbersGroup.add(climber);

invisibleBlock=createSprite(200,15);
invisibleBlock.width=climber.width;
//invisibleBlock.visible="false";
invisibleBlock.height=2;
invisibleBlock.velocityY=1;
invisibleBlock.x=climber.x;
invisibleBlock.debug=true;
invisibleBlockGroup.add(invisibleBlock);

ghost.depth=door.depth;
ghost.depth=ghost.depth+1;
if(ghost.isTouching(invisibleBlockGroup)){
  gameState="end";
}
}

}
if(gameState==="end"){
  ghost.destroy;
  door.destroy;
  climber.destroy;
  text("GameOver",200,200);
  }
  