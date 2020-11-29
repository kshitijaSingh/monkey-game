
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score
var survivalTime = 0; 



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(450,360,1000,20);
  ground.shapeColor ="brown";
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  score = 0;
}


function draw() {
background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score = "+score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());   
  text("survivalTime = "+survivalTime,100,50);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;   
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  enemy();
  food();
  
  drawSprites();
}
function food(){
  if(frameCount%80===0){
  banana = createSprite(410,15,20,20);
  banana.y = random(100,200);
  banana.velocityX = -3;
  banana.addImage(bananaImage);
  banana.scale = 0.1;

  FoodGroup.add(banana);
  }
}
function enemy(){
  if(frameCount%300===0){
   obstacle = createSprite(410,340,20,20);
    obstacle.scale = 0.1;
  obstacle.collide(ground);
  obstacle.velocityX =-3;
  obstacle.addImage(obstacleImage);
  obstacleGroup.add(obstacle);
  }
}




