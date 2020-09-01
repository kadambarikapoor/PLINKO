const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var particles=[];
var plinkos=[];
var divisions=[];
var divH=300;
var ground;

function setup() {
  createCanvas(480,700);

  engine = Engine.create();
  world = engine.world;
  
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divH/2,10,divH));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  ground=new Ground(width/2,height,width,10);
  Engine.run(engine);
}

function draw() {
  background('black');  
  ground.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  console.log(frameCount);
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  
  drawSprites();
}