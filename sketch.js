var x = 0;
var y = 0;

 function setup(){
    createCanvas(720,480);  
 }

 function draw(){
    background('#AA44FF')
    rect(x,y,10,40,10)
    x = x + 1;
    x = x % 500;
    y = y + 2
    y = y % 400;
 }