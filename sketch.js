var jaxon, path
var jaxonimg, pathimg
var lboundary, rboundary
function preload(){
  //pre-load images
  jaxonimg= loadAnimation("Runner-1.png","Runner-2.png");
  pathimg= loadImage("path.png")
}

function setup(){
  createCanvas(800,800);
  background("black")
  //create sprites here
 path= createSprite(400,200)
 path.addImage( pathimg)
 path.velocityY=5
 path.scale=1.2


 jaxon= createSprite(400,480)
 jaxon.addAnimation("running", jaxonimg)
 jaxon.scale=0.10
 


 lboundary= createSprite(680,400,200,800)
 rboundary= createSprite(130,400,200,800)
lboundary.visible=false
rboundary.visible= false
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y= 200
  }
 jaxon.x=World.mouseX
jaxon.collide(lboundary)
jaxon.collide(rboundary)

edges= createEdgeSprites();
//jaxon.collide(edges)







drawSprites()
}
