
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    
    //Create the Bodies Here.
    ground=new Ground(600,height,1200,20);
//level two
block8=new Block(330,235,30,30)
block9=new Block(360,235,30,30)
block10=new Block(390,235,30,30)
block11=new Block(420,235,30,30)
block12=new Block(450,235,30,30)
//level three
block13=new Block(360,195,30,40)
block14=new Block(390,195,30,40)
block15=new Block(450,195,30,40)

//top
block16=new Block(399,155,30,40)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function mouseDragged(){
    if(gameState!=="launch"){

   
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
} 
}
function mouseReleased(){
    slingshot.fly();
    gameState="launch"
}
function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
function Keypressed(){
    if(keyCode===32){
polygon.fly
    }
}