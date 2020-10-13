const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];

var plinkos = [];

var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,800,800,15);
  
  for (var p=75; p<=width; p = p+50){
    plinkos.push(new Plinko(p, 75))

  }

  for (var p=50; p<=width - 10; p = p+50){
    plinkos.push(new Plinko(p, 175))

  }

  for (var p=75; p<=width; p = p+50){
    plinkos.push(new Plinko(p, 275))

  }

  for (var p=50; p<=width - 10; p = p+50){
    plinkos.push(new Plinko(p, 375))

  }

  for(var d=0; d<= width; d= d+80){
    divisions.push(new Division(d, 650, 10, divisionHeight));
  }
  


  Engine.run(engine);
}

function draw() {
  background(0);  

  if(frameCount % 60 == 0){
    particles.push(new Particles(random(100,700),10));
  }
  
  
  for(var i=0; i< plinkos.length; i++){
  plinkos[i].display();
  }

  for(var j=0; j< divisions.length; j++){
    divisions[j].display();
    }

    for(var k=0; k< particles.length; k++){
      particles[k].display();
      }

    ground.display();

}