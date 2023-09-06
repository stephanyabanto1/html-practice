var ball1 = {

  x : 200,
  y : 300,
  xspeed :4,
  yspeed: 4

}
var ball2 = {
  x:400,
  y:600,
  xspeed: 4,
  yspeed: 4,
}

function setup(){

  createCanvas(800, 800);
}

function draw(){
  background(0);
  stroke(225);
  strokeWeight(5);
  noFill();
  ellipse(ball1.x, ball1.y, 24, 24)
  ellipse(ball2.x, ball2.y, 30,30)



  ballMove(ball1);
  ballMove(ball2);


}

function ballMove(ball){

  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y - ball.yspeed;

  if(ball1.y<0){
    ball1.yspeed = ball1.yspeed + 2;
    ball1.y = 800;
    ball1.x = 300;

  }
  if(ball2.y<0){
    ball2.y = 800;
    ball2.x = 200;

  }


}



 

 




