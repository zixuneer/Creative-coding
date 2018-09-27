function setup() {
  createCanvas(800, 600);

}

var x=0;
var y=500;
var speed=1.5;

function draw() {

  background(249, 231, 159);
  fill(247, 220, 111);
  rect(0,600,2000,300);
  //wheel

  rectMode(CENTER);
  strokeWeight(3);
  stroke(245, 176, 65);
  fill(248, 196, 113);
  rect(x,y,350,50,80);

  strokeWeight(5);
  stroke(220, 118, 51);
  fill(252, 243, 207);
  ellipse(x,y,30,30);
  ellipse(x-100,y,30,30);
  ellipse(x-50,y,30,30);
  ellipse(x+50,y,30,30);
  ellipse(x+100,y,30,30);

  //leg

  rectMode(CORNERS);
  noStroke();
  fill(156, 100, 12)
  rect(x-15,y-25,x+15,y-90);

  //body

  fill(115, 198, 182)
  rect(x-120,y-240,x+120,y-90,20);
  fill(random(220,240),148, 138);
  ellipse(x,y-160,60);

  //arms
  ellipseMode(CENTER);
  fill(241, 148, 138);
  ellipse(x-130,y-220,20,20);
	ellipse(x+130,y-220,20,20);

  fill(248, 196, 113);
  rect(x-160,y-220,x-137,y-120,70);
  rect(x+137,y-220,x+160,y-120,70);

  fill(115, 198, 182);
  arc(x+148,y-100, 40, 40, PI,0, CHORD);
  arc(x-148,y-100, 40, 40, PI,0, CHORD);
  fill(169, 223, 191);
  rect(x+137,y-160,x+160,y-170);
  rect(x-137,y-160,x-160,y-170);

  //head

  rectMode(CENTER);
  fill(248, 196, 113);
  rect(x,y-350,10,105);
  strokeWeight(7);
  stroke(248, 196, 113)
  noFill();
  ellipse(x-10,y-410,20);
  ellipse(x+10,y-410,20);
  noStroke();
  fill(169, 223, 191);
  rect(x,y-315,190,130,10);

  //eyes & teeth

  strokeWeight(3);
  stroke(249, 231, 159);
  fill(random(50,200),random(100,250),random(50,250));
  ellipse(x-55,y-330,20);
  ellipse(x+50,y-330,40);

  noStroke();
  fill(249, 231, 159);
  rect(x-40,y-280,10,10);
  rect(x-20,y-280,10,10);
  rect(x,y-280,10,10);
  rect(x+20,y-280,10,10);
  rect(x+40,y-280,10,10);

  x=x+speed;
  if(x<0 || x>width){
    speed=speed*-1;
  }
}
