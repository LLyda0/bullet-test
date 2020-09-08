var wall, thickness;
var bullet, Speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  Speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);

  bullet = createSprite(50, 200, 50, 30);
  bullet.velocityX=Speed;
  bullet.shapeColor="white";

  wall = createSprite(1500,200,thickness,200);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  

  collision();

  drawSprites();
}

function collision(){
  if(wall.x - bullet.x < (bullet.width+wall.width)/2){
   bullet.velocityX=0;

  damage = bullet.weight*bullet.Speed*bullet.Speed/wall.thickness*wall.thickness*wall.thickness;

   if(damage>10);
   {
   wall.shapeColor=color(0,255,0);
   }
   
   if(damage<10);
   {
   wall.shapeColor=color(255,0,0);
   }
  }
}