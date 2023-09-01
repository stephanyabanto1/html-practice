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
    translate(mouseX -200,50,0);
    rotateY(mouseY/100);
  
    fill("pink");
    // box();
    sphere(100);
}


