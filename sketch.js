let angle = 0;




function setup(){

  createCanvas(800, 800), WEBGL;
  angleMode(DEGREES);
}

function draw(){
  background(200);

  apple();

  translate(400,400);
  
 
  rotate(angle);
  line(0,0,45,80);
  fill(255);

  rotate(angle*(-3));
  ellipse(120,120, 150, 90);

  angle = angle + 1;

  


}
function apple(){

  circle(300,400,80);

}





 

 




