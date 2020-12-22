const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, box, box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true,

    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    box = new Box(150, 100, 50, 80);
    box1 = new Box(210, 100, 30, 30);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    box.display();
    box1.display();
}