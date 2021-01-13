const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18,box19,box20;

var ball;
var backgroundImg;
var chain1;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(450,500,950,15);

    box1 = new Box(550,120,70,70);
    box2 = new Box(550,120,70,70);
    box3 = new Box(550,120,70,70);
    box4 = new Box(550,120,70,70);
    box5 = new Box(550,120,70,70); 
    box6 = new Box(550,120,70,70); 
    box7 = new Box(550,120,70,70); 
    box8 = new Box(550,120,70,70);
  
    box9 = new Box(650,120,70,70);
    box10 = new Box(650,120,70,70);
    box11 = new Box(650,120,70,70);
    box12 = new Box(650,120,70,70);
    box13  = new Box(650,120,70,70);
    box14  = new Box(650,120,70,70);

    box15 = new Box(750,120,70,70);
    box16 = new Box(750,120,70,70);
    box17 = new Box(750,120,70,70);
    box18 = new Box(750,120,70,70);
    box19  = new Box(750,120,70,70);
    box20  = new Box(750,120,70,70);
    
   
    ball = new Ball(390,260, 80);
 
    chain1 = new Chain(ball.body, {x:390, y:50});


}

function draw(){

    background(220);

    Engine.update(engine);
   
    ground.display();

    ball.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
   
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();



    chain1.display();

}
function mouseDragged(){
Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY});
}
