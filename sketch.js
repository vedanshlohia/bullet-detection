var bullet1, bullet2, bullet3;

var wall;

function setup() {
  createCanvas(1600,800);
 
  wall = createSprite(1400,400,60,700);
  wall.thickness = random(22,83);

  bullet1 =  createSprite(200, 150, 25, 25);
  bullet1.speed = bullet1.velocityX = random(231,263);
  bullet1.weight = random(30,52);

 bullet2 = createSprite(200, 300, 25, 25);
 bullet2.speed = bullet2.velocityX = random(231,263);
 bullet2.weight = random(30,52);

 bullet3 = createSprite(200, 450, 25,25);
 bullet3.speed =  bullet3.velocityX = random(231,263);
 bullet3.weight = random(30,52);
}

function draw() {
  background(255,255,255);

  var deformation = 0.5 * bullet1.speed  * bullet1.speed  * bullet1.weight/ wall.thickness * wall.thickness 
  var deformation2 =  0.5 * bullet2.speed  * bullet2.speed  * bullet2.weight/ wall.thickness * wall.thickness
  var deformation3 =  0.5 * bullet3.speed  * bullet3.speed  * bullet3.weight/ wall.thickness * wall.thickness
  
  if( wall.x - bullet1.x < bullet1.width/2 + wall.width/2 && deformation < 10){
    bullet1.shapeColor = "red";
    bullet1.speed = bullet1.velocityX = 0;
  }

  if( wall.x - bullet2.x < bullet2.width/2 + wall.width/2 && deformation2 < 10){
      bullet2.shapeColor = "red";
      bullet2.speed  = 0;
    }

    if( wall.x - bullet3.x < bullet3.width/2 + wall.width/2 && deformation3 < 10){
      bullet3.shapeColor = "red";
      bullet3.speed  = bullet3.velocityX = 0;
    }
    else if( wall.x - bullet1.x < bullet1.width/2 + wall.width/2 && deformation > 10){
      bullet1.shapeColor = "green";
      bullet1.speed  = bullet1.velocityX = 0;
    }
  
    if( wall.x - bullet2.x < bullet2.width/2 + wall.width/2 && deformation2 > 10){
        bullet2.shapeColor = "green";
        bullet2.speed = bullet2.velocityX = 0;
      }
  
      if( wall.x - bullet3.x < bullet3.width/2 + wall.width/2 && deformation3 > 10){
        bullet3.shapeColor = "green";
        bullet3 = bullet3.velocityX = 0;
      }
      


  drawSprites();
}