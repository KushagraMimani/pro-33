var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var IMG;

var particle;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

var count = 0;

var score = 0;

function preload(){
IMG = loadImage("images/gameover.png");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  imageMode(CENTER);

  text("500", 20, 770);
  text("500", 100, 770);
  text("500", 180, 770);
  text("500", 260, 770);

  text("100", 340, 770);
  text("100", 420, 770);
  text("100", 500, 770);
  text("100", 580, 770);

  text("200", 660, 770);
  text("200", 740, 770);

  if (gameState === END) {
    image(IMG, 400, 400, 400, 400);
  }  

  if(particle != null)
  {
    particle.display();
    if (particle.body.position.y > 760) 
    {
      if (particle.body.position.x < 300) 
      {
        score = score + 500;
        particle = null;
        if (count >= 5){
          gameState = END;
        }
      }
    }
  }

  if(particle != null)
  {
    particle.display();
    if (particle.body.position.y > 760) 
    {
      if (particle.body.position.x > 301 && particle.body.position.x < 600) 
      {
        score = score + 100;
        particle = null;
        if (count >= 5){
          gameState = END;
        }
      }
    }
  }

  if(particle != null)
  {
    particle.display();
    if (particle.body.position.y > 760) 
    {
      if (particle.body.position.x > 601 && particle.body.position.x < 900) 
      {
        score = score + 200;
        particle = null;
        if (count >= 5){
          gameState = END;
        }
      }
    }
  }

  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }   
}

function mousePressed(){
  if (gameState !== END) {
    particle = new Particle(mouseX, 10,10);
    count++;
    console.log(count);
  }
}

//if(frameCount%60===0){}