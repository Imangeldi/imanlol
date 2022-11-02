
var clickCount = 0;
var mycanvas, ctx;
document.addEventListener('DOMContentLoaded',function(){
  mycanvas = document.getElementById("mycanvas"); 
  ctx = mycanvas.getContext("2d");
   
});
function clickHandler(){ 
    clickCount++; 
    increment();
      
}

function increment(){
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
    ctx.font = 'bold 15px sans-serif'; 
    ctx.fillText("Ваши клики:   " + clickCount,20,50);
    
}



