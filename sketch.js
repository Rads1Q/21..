
var wall,thickness;
var bullet,speed,weight;

function setup() 
{
  createCanvas(1600,400);
  bullet = createSprite(20,100,50,50);
  bullet.shapeColour="white";
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapecColour=(80,80,80);
  speed = random(223,325);
  weight = random(40,52);
  thickness = random(22,83);
  bullet.velocityX=speed;

}
 function hascollied(bullet, wall)
 {
  var bulletright = bullet.x + bullet.width;
  var bulletleft = bullet.x;
  if(bulletright >= bulletleft)
  {
    return true;
  }
  return false;
 }
function draw()
 {
  background("black");  
  
  if(hasCollied(bullet,wall))
  {
    bullet.velocityX=0;
    var d= 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(d > 10)
      {
          bullet.shapeColour = color(255,0,0) ;
      }
      if(d < 10)
      {
        bullet.shapeColour = color(0,255,0);
      }

  }

  drawSprites();
  }