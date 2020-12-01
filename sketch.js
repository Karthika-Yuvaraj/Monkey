
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground;
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
monkey=createSprite(100,310);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
  FoodGroup= new Group();
  obstacleGroup = new Group();
}


function draw() {
background("White");
  ground=createSprite(300,345,600,10);
  score=Math.ceil(frameCount/frameRate());
  text("Survival Time :"+score,200,50);
  ground.velocityX=-4;
  if(ground.x<0)
    {
      ground.x=ground.width/2;
    }
  if(keyDown("Space"))
    {
      monkey.velocityY=-12;
    
    }
  if(obstacleGroup.isTouching(monkey))
    {
      destroy(FoodGroup)
    }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  drawSprites();
  food();
  Stone();
}
function food()
{
  if(frameCount%80===0)
    {
  banana=createSprite(200,200,30,10);
  banana.addImage("o1", bananaImage);
   banana.scale=0.1;
 banana.y=Math.round(random(120,200));
       banana.velocityX=-4;
       banana.setLifetime=300;
      FoodGroup=banana;
    }
}
function Stone()
{
 if(frameCount%300===0)
   {
     obstacle=createSprite(200,200,30,10);
     obstacle.addImage("o",obstacleImage);
     obstacle.scale=0.1;
     obstacle.velocityX=-4;
  obstacleGroup=obstacle; 
    
}

   }
