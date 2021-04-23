mouseEvent = "empty";
var oldX ,oldY;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var width = 1;
canvas.addEventListener("mousedown",mdn);
function mdn(e){
    color = document.getElementById("col").value;
    width = document.getElementById("wid").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove",mde);
function mde(f){
   x = f.clientX-canvas.offsetLeft;
   y = f.clientY-canvas.offsetTop;
   if(mouseEvent=="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width;
       console.log("Last position of x coordinate: "+oldX+"and the Y coordinate: "+oldY);
       ctx.moveTo(oldX,oldY);
       console.log("New position of x coordinate: "+x+"and the Y coordinate: "+y);
       ctx.lineTo(x,y);
       ctx.stroke();
   }
   oldX=x;
   oldY=y;
}
canvas.addEventListener("mouseup",mdp);
function mdp(a){
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave",mdl);
function mdl(b){
    mouseEvent = "mouseleave"
}
function wipe(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}