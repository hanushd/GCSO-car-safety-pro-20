var car,car1,car2,car3
var wall,wall1,wall2,wall3

var speed,weight

function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(50,150,20,20)
  car.velocityX = 5;
  wall = createSprite(1500,150,30,10)

  car1 = createSprite(50,200,20,20)
  car1.velocityX = 9;
  wall1 = createSprite(1500,200,30,10)

  car2 = createSprite(50,250,20,20)
  car2.velocityX = 6;
  wall2 = createSprite(1500,250,30,10)

  car3 = createSprite(50,300,20,20)
  car3.velocityX = 12;
  wall3 = createSprite(1500,300,30,10)
}

function draw() {
  background(0,0,0);
  
if(wall.x - car.x < wall.width/2 + car.width){
  car.velocityX = 0;

  var deformation = 0.5 * weight * speed * speed/22500;

if(deformation === 180 && deformation>180){
 car.shapeColor = color(255,0,0)         
}

if(deformation<180 && deformation>100){
car.shapeColor = color(230,230,0)
}

if(deformation<100){
 car.shapeColor = color(0,255,0) 
}
}

if(wall1.x - car1.x < wall1.width/2 + car1.width){
  car1.velocityX = 0;

  var deformation = 0.5 * weight * speed * speed/22500;

if(deformation === 180 && deformation>180){
 car1.shapeColor = color(255,0,0)         
}

if(deformation<180 && deformation>100){
car1.shapeColor = color(230,230,0)
}

if(deformation<100){
 car1.shapeColor = color(0,255,0) 
}
}

if(wall2.x - car2.x < wall2.width/2 + car2.width){
  car2.velocityX = 0;

  var deformation = 0.5 * weight * speed * speed/22500;

if(deformation === 180 && deformation>180){
 car2.shapeColor = color(255,0,0)         
}

if(deformation<180 && deformation>100){
car2.shapeColor = color(230,230,0)
}

if(deformation<100){
 car2.shapeColor = color(0,255,0) 
}
}

if(wall3.x - car3.x < wall3.width/2 + car3.width){
  car3.velocityX = 0;

  var deformation = 0.5 * weight * speed * speed/22500;

if(deformation === 180 && deformation>180){
 car3.shapeColor = color(255,0,0)         
}

if(deformation<180 && deformation>100){
car3.shapeColor = color(230,230,0)
}

if(deformation<100){
 car3.shapeColor = color(0,255,0) 
}
}

 drawSprites();
}