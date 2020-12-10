var fixrectangle,movingrectangle

function setup() {
  createCanvas(1200,800);
  fixrectangle=createSprite(200,200,50,80);
  movingrectangle=createSprite(400,200,80,30);
}

function draw() {
  background("blue");  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;

  console.log(movingrectangle.x-fixrectangle.x);

  if(movingrectangle.x-fixrectangle.x<fixrectangle.width/2+movingrectangle.width/2
    && fixrectangle.x-movingrectangle.x<fixrectangle.width/2+movingrectangle.width/2
    && movingrectangle.y-fixrectangle.y<fixrectangle.height/2+movingrectangle.height/2
    && fixrectangle.y-movingrectangle.y<fixrectangle.height/2+movingrectangle.height/2) {
    movingrectangle.shapeColor="red";
    fixrectangle.shapeColor="red";
  }
  else{
    movingrectangle.shapeColor="green";
    fixrectangle.shapeColor="green";
  }
  drawSprites();
}
