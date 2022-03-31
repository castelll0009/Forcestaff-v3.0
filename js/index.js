var boton = document.getElementById("boton-play");
boton.addEventListener("click", function() { } );

var v = document.getElementsByTagName("audio")[1];

var sound = false;
boton.addEventListener("click", function(){
 if (!sound) {
   v.play();   
   this.innerHTML="Play" ;        
   sound = true;
  } else {
   v.pause();   
   this.innerHTML="Pause" ;  
   sound = false;
  } 
});

/*
var boton = document.getElementById("boton");
boton.addEventListener("click", function() { } );

var v = document.getElementsByTagName("audio")[1];

var sound = false;
boton.addEventListener("click", function(){
 if (!sound) {
   v.play();   
   this.innerHTML="Play" ;        
   sound = true;
  } else {
   v.pause();   
   this.innerHTML="Pause" ;  
   sound = false;
  } 
});

*/
// codigo para para la animacion de reporduccion



/*
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 
*/