// You could have multiple flags like: start, launch to indicate the state of the game.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop1;
var i
function preload(){
i = loadImage("assets/download.png")
}
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    drop1 = new Tank(100,355,100,30)
    ground1 = new Ground(200,385,400,30)
    drop2 = new Tank(100,325,100,30)
    tank = new Tank(165,280,50,20, -PI/7)
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(i);
    
    ellipse(100,320,100,100);
    ellipse(80,350,40,40)
    drop1.display();
    ground1.display();
    drop2.display();
    tank.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}