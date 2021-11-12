var bg, sleep , brushed , gym , eat , bath , move

var astronaut
function preload(){
  bg = loadImage("iss.png")
  sleep = loadAnimation("sleep.png")
  brushed = loadAnimation("brush.png")
  gym = loadAnimation("gym1.png" , "gym1.png" , "gym2.png" , "gym2.png")
  eat = loadAnimation("eat1.png" ,"eat1.png" ,"eat1.png" , "eat2.png" , "eat2.png" ,"eat2.png")
  bath = loadAnimation("bath1.png" , "bath1.png" , "bath1.png" , "bath2.png" ,"bath2.png" ,"bath2.png")
  move = loadAnimation("move.png" , "move.png" , "move1.png", "move1.png")
}


function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300 , 230)
  astronaut.addAnimation("sleeping" , sleep)
  astronaut.scale = 0.1
}


function draw() {
  background(bg);  
  drawSprites();
  textSize(20)
  fill("white")
  text("Instructions")
  textSize(15)
  text("Up arrow = Brushing" , 20 , 55)
  text("Down arrow = Gym time" , 20 , 70)
  text("Left arrow = Eating" , 20 , 85)
  text("Right arrow = Bathing" , 20 , 100)
  text("M key = Moving" , 20 , 115)
  edges = createEdgeSprites()
  astronaut.bounceOff(edges);
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brushed)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gym", gym)
    astronaut.changeAnimation("Gym")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating", eat)
    astronaut.changeAnimation("Eating")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Bathing", bath)
    astronaut.changeAnimation("Bathing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  
  }

  if (keyDown("M")){
    astronaut.addAnimation("Moving", move)
    astronaut.changeAnimation("Move")
    astronaut.y = 350
    astronaut.velocityX = 1
    astronaut.velocityY = 1
  
  }
}