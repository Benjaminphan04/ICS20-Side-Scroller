var person;

function setup() {
  createCanvas(1920, 1080);
	person = new Person();
}

function keyPressed() { 
  if ( key == ' '){
   var jump = createVector(0,-5);
   person.applyForce(jump);
   }
}

  function draw() {
  background(100);
  
  translate(-person.pos.x+50, 0);
    
  var gravity = createVector(0,0.1); 
  person.applyForce(gravity);
    
	person.update();
  person.edges();
  person.display();
  
  //immobile obstacle
  fill(235);
  rect(400,height-50,50,50);
}
