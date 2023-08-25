const canvas = document.getElementById("myCanvas");


const ctx = canvas.getContext("2d");

// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();


// ctx.beginPath();
// ctx.arc(50,50, 10, 0, (2/Math.PI));
// ctx.stroke();



let x = 0;



function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x,x, 10, 0, Math.PI*2);

    ctx.stroke();
    x += 0.1;

}

animate();