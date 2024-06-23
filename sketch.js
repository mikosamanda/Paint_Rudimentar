
let cor;

function setup() {
  createCanvas(1000, 600);
  background(random(0,255),random(0,255),random(0,255));
  cor = color (random(0,255),random(0,255),random(0,255))
}

function draw() {
    
  //noStroke();
  stroke("yellow");
  fill(cor);
  
  //console.log(mouseIsPressed)
  if(mouseIsPressed){
   rect(mouseX,mouseY,20,20);
  }
  
  
}
