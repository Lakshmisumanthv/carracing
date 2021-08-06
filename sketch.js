
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var car1Image
var car2Image
var trackImage 

function preload(){
car1Image=loadImage("car1.jpg")
car2Image=loadImage("car 2.jpg")
trackImage=loadImage("track.jpg") 
} 

function setup(){
createCanvas(1010,1400) 
  
  track =createSprite(900,879,100,100)
  track.addImage(trackImage)
  track.scale=3
  
  car1=createSprite(110,1246,70,70)
  car1.addImage(car1Image)
  car1.scale=0.4

  car2 =createSprite(110,949,10,10)
  car2.addImage(car2Image)
  car2.scale=0.2
} 

function draw(){
  background("lightblue");
  
  if (keyDown("UP")){
   car1.y=car1.y-2
  }
   
  if (keyDown("DOWN")){
   car1.y=car1.y+2
  } 
  
    
  if (keyDown("RIGHT")){
car1.x=car1.x+2
  }
    
  if (keyDown("LEFT")){
 car1.x=car1.x-2
  }
 
  
  if (keyDown("W")){
   car2.y=car2.y-2
  }
   
  if (keyDown("S")){
   car2.y=car2.y+2
  } 
  
    
  if (keyDown("D")){
  car2.x=car2.x+2
  }
    
  if (keyDown("A")){
  car2.x=car2.x-2
  }
   drawSprites()
}
if(mousePressedOver(restart)){
      reset();
}

 
