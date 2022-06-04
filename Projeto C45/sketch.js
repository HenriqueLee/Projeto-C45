 var spaceship, spaceshipImage
 var meteor, meteorImage 

function preload(){
 spaceshipImage = loadImage("./images/spaceship.png");
 meteorImage = loadImage("./images/meteor.png");
}




  function setup() {
  createCanvas(800,400);
  spaceship= createSprite(400, 200, 50, 50);
  spaceship.addImage(spaceshipImage);
  spaceship.scale = 0.4
  meteor= createSprite(100,100,20,20);
  meteor.addImage(meteorImage);
  meteor.scale = 0.2
  }


function draw() {
  background("blue");  
  drawSprites();
}