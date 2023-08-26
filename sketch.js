function setup() {
    createCanvas(400, 400, WEBGL);
  }
  
//   function draw() {
//     if (mouseIsPressed) {
//       fill(0);
//     } else {
//       fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
//   }


function draw(){
    background(220);
    rotateX(millis()/1000);
    rotateY(millis()/1000);
    box();
    sphere(100);
}


