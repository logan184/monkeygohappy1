
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0;
var ground,groundImage;
var survialTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage=loadImage("ground2.png");
  
}



function setup() {
 createCanvas(400,400);
  monkey=createSprite(80,360,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  ground=createSprite(200,390,400,10);
  ground.addImage("ground",groundImage);
  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background("white");
  ground.velocityX=-3;
 if(ground.x<0){
   ground.x=ground.width/2;
}
  if(keyDown("space")){
   monkey.velocityY=-12;   
}
  monkey.velocityY=monkey.velocityY+0.8;
 monkey.collide(ground)
  
  fruits(); 
  obstacles();
  if(monkey.isTouching(foodGroup)){
    score=score+1; 
    foodGroup.destroyEach();
}
  drawSprites();
  textSize(20);
  text("score:"+score,300,20);
}

function fruits(){
 if(frameCount%100===0){
  banana=createSprite(400,100,20,20);
  banana.addImage("banana",bananaImage);
  banana.velocityX=-5;
  banana.scale=0.1;
  banana.y=Math.round(random(100,250));
  foodGroup.add(banana);
}
}
function obstacles(){
 if(frameCount%200===0){
 obstacle =createSprite(400,370,20,20);
 obstacle.addImage("obstacle",obstacleImage);
  obstacle.velocityX=-5;
  obstacle.scale=0.1; 
   obstacleGroup.add(obstacle);
}  
}