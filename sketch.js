var wall;
var boyImage;
var edge
var monsterImage
var treasureImage
var gameState="play";

function preload(){
  boyImage = loadAnimation("w1.png","w2.png","w3.png","w4.png")
  monsterImage = loadImage("monster.png")
  treasureImage = loadImage("treasure.png")
}

function setup() {

  createCanvas(800,400);

wall = createSprite(599,240,20,350)
wall2 = createSprite(55,10,20,300)
wall3 = createSprite(50,368,20,200)
wall4 = createSprite(136,11,20,600)
wall5 = createSprite(269,309,287,20)
wall6 = createSprite(460,211,300,20)
wall7 = createSprite(300,79,400,20)
wall8 = createSprite(672,235,100,20)
treasure = createSprite(747,355,20,20)
treasure.scale = 0.5
treasure.addImage(treasureImage)
edge = createEdgeSprites()
monster = createSprite(176,258,20,20)
monster.shapeColor = "red"
monster.velocityX = -1
monster.addImage(monsterImage)
monster.scale = 0.05
monster2 = createSprite(206,108,20,20)
monster2.velocityX = -1
monster2.shapeColor = "red"
monster2.addImage(monsterImage)
monster2.scale = 0.05
monster3 = createSprite(703,185,20,20)
monster3.velocityX = -1
monster3.shapeColor = "red"
monster3.addImage(monsterImage)
monster3.scale = 0.05
boy = createSprite(16,199,10,10)
boy.addAnimation("walking",boyImage)
boy.scale = 0.2
}

function draw() {
  background(0);  
  text(mouseX +","+mouseY,mouseX,mouseY)
 


monster.bounceOff(wall4)
monster.bounceOff(wall)
monster2.bounceOff(wall)
monster2.bounceOff(wall4)
monster3.bounceOff(wall)
monster3.bounceOff(edge[1])
boy.bounceOff(wall)
boy.bounceOff(wall2)
boy.bounceOff(wall3)
boy.bounceOff(wall4)
boy.bounceOff(wall5)
boy.bounceOff(wall6)
boy.bounceOff(wall7)
boy.bounceOff(wall8)
boy.bounceOff(edge)













  drawSprites();
  if(gameState === "play"){
    if(boy.isTouching(treasure))
    {textSize(50)
      fill("yellow")
      text("Treasure Is Secured",232,165) 
  
    }

    if(boy.isTouching(monster)||boy.isTouching(monster2)||boy.isTouching(monster3))
    {
      monster.velocityX = 0;
      monster2.velocityX = 0;
      monster3.velocityX = 0;
      gameState = "end"

    }
    if (keyDown(RIGHT_ARROW)){
      boy.x = boy.x +5;
    }
    
    if (keyDown(LEFT_ARROW)){
      boy.x = boy.x -5;
    }
    
    if (keyDown(UP_ARROW)){
      boy.y = boy.y -5;
    }
    
    if (keyDown(DOWN_ARROW)){
      boy.y = boy.y +5;
    }

  }
  if(gameState ==="end"){
    textSize(50)
      fill("yellow")
      text("You Failed To Secure Treasure",232,165) 
  }

   
  






}



 











