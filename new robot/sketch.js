function preload(){
  // put preload code here
}

var x=100;
var y=100;
var w=60;
var h=60;
var speed=1;

function setup() {
  createCanvas(400,400);
}

function draw() {
  x=x+speed;
  if((x>width || x<0)){
    speed=speed*-1;
  }

  background(255);

  ellipseMode(CENTER);
  rectMode(CENTER);

  //arms
  for(var i=y+7; i<y+h; i+=20){
    stroke(random(100,200),random(50,200),random(150,255));
    line(x-w/3, i, x+w/3, i);
  }

  //body
  stroke(220);
  fill(210,170,240,random(150,255));
  rect(x,y,w/6,h*2);

  //head
  fill(190,210,170);
  ellipse(x,y-h/2,w,h);

  //legs
  stroke(80);
  line(x-w/12, y+h, x-w/4, y+h+10);
  line(x+w/12, y+h, x+w/4, y+h+10);
}
