
let x2=250; //We want this one to move left and right 
let y2=250;
let y1=0;
let x1 =200;
let directionR = true;

let length;

function setup(){
createCanvas(400,400);
 

}


function draw(){
background(153);

stroke('blue');
line(200,0,200,250);



line(x1,y1,x2,y2);

x2= x2+2;
if(x2>400)
{
  x2=width;
  directionR = false;
}


stroke('black');






length = (y2-x2)/(x2-x1);


 
}
  



  










 

 




