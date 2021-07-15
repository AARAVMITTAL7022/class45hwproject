var player;
var coronaVirus, mask;
var immunityBuildingFoods;
var immunity=0;
var ground;
var food1Image, food2Image, food3Image, food4Image, food5Image;
var coronaVirusImage, maskImage;
var playerImage, groundImage;

function preload(){
  food1Image= loadImage("amla.jpg");
  food2Image= loadImage("ginger.jpg");
  food3Image= loadImage("honey.jpg");
  food4Image= loadImage("lemon.jpg");
  food5Image= loadImage("orange.jpg");

  maskImage= loadImage("mask.jpg");
  coronaVirusImage= loadImage("corona.jpg");
  playerImage= loadAnimation("player.gif", "player.gif", "player.gif");
  groundImage= loadImage("ground.png");
}

function setup(){
  createCanvas(800,400);
  player= createSprite(200,200,30,30);
  player.addAnimation("player", playerImage);
  player.scale= 0.2;
  player.velocityX= 3;



}

function draw(){
  background(groundImage);

  spawnImmunityBuildingFoods();
  drawSprites();

}

function spawnImmunityBuildingFoods(){
  if(frameCount % 60 === 0){
     immunityBuildingFoods = createSprite(200,200,30,30);
     immunityBuildingFoods.y= Math.round(random(50,200));
     immunityBuildingFoods.velocityX= -3;

     var rand= Math.round(random(1,5));
     switch(rand){
       case 1: immunityBuildingFoods.addImage(food1Image);
               break;
       case 2: immunityBuildingFoods.addImage(food2Image);
               break;
       case 3: immunityBuildingFoods.addImage(food3Image);
               break;
       case 4: immunityBuildingFoods.addImage(food4Image);
               break;
       case 5: immunityBuildingFoods.addImage(food5Image);
               break;
       default:break;
     }
     immunityBuildingFoods.scale=0.2;
  }
  
}