var trex ,trex_running,ground;

function preload(){
  
trex_running=loadAnimation("trex1.png","trex3.png",'trex4.png');
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite

 trex=createSprite(50,160,20,20);
 trex.addAnimation("trexrunning",trex_running);
 trex.scale=0.5;

 //create the ground
 ground=createSprite(300,185,600,10);

 createEdgeSprites();
}

function draw(){
  background("pink");

  //to make trex jump
  if(keyDown("space")){
    trex.velocityY=-5;
  }

  //To add the gravity
  trex.velocityY=trex.velocityY+0.5;

  trex.collide(ground);
  
  drawSprites();
}
