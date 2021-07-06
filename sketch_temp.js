const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body =Matter.Body;


var engine,world
var ball,rock;
var ground,wedge;
var angle =60;

function setup(){
    createCanvas(400,400)
    engine = Engine.create();
    world = engine.world;

    var ball_options = {
        restitution : 0.95,
        frictionAir : 0.01
    }

    ball =Bodies.circle(100,20,20,ball_options);
    World.add(world,ball)

    var rock_options = {
        restitution : 0.5,
        frictionAir : 0.01
    }

    rock =Bodies.circle(300,20,20,rock_options);
    World.add(world,rock)

    
    var ground_options={
        isStatic:true 
    }
    ground=Bodies.rectangle(200,390,400,20,ground_options)
    World.add(world,ground)

    var wedge_options={
        isStatic:true 
    }
    wedge=Bodies.rectangle(200,200,400,20,wedge_options)
    World.add(world,wedge)
}

function draw(){
    background(51);
    Engine.update(engine);

    Matter.Body.rotate(wedge,angle)
    push();
    translate(wedge.position.x,wedge.position.y);
    rotate(angle);
    rect(0,0,100,20);
    pop();
    
    angle +=0.1;

    ellipse(ball.position.x,ball.position.y,40)
    ellipse(rock.position.x,rock.position.y,40)

    rectMode(CENTER)
    fill("red")
    rect(ground.position.x,ground.position.y,400,20)

}







