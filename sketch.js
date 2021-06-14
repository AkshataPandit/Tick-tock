var hr,mn,sc;
var hrangle,mnangle,scangle;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)

}

function draw() {
  background(0);  
  hr=hour();
  sc=second();
  mn=minute();
  fill("white");
  textSize(20);
  text("hr: "+hr+" mn: "+mn+" sc: "+sc,500,150);
  stroke("yellow")
strokeWeight(5);
textSize(30);
fill("white");
text("Virtual Clock",400,100)
  //translation and rotation
  translate(200,200);
  rotate(-90)
  scangle=map(sc,0,60,0,360);
  mnangle=map(mn,0,60,0,360);
  hrangle=map(hr%12,0,12,0,360);
  //second hand 
  push ();
  rotate(scangle);
  stroke("red");
  strokeWeight(5);
  line(0,0,100,0);
  pop();
//minute hand 
push ();
rotate(mnangle);
stroke("green");
strokeWeight(5);
line(0,0,75,0);
pop();
//hour hand 
push ();
rotate(hrangle);
stroke("blue");
strokeWeight(5);
line(0,0,50,0);
pop();

strokeWeight(10);
noFill();
//second
stroke("red")
arc(0,0,300,300,0,scangle);
//minute
stroke("green")
arc(0,0,280,280,0,mnangle);
//hour
stroke("blue")
arc(0,0,260,260,0,hrangle);


}
