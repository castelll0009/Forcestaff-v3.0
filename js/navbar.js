(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('.nav-container ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('.nav-container ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle(100);
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide(100);
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 

  
  /*cambiar la apariencia de la barra superiro al mover la rueda del mouse hacia abajo*/

//var pre_stick= document.querySelector("#pre-stick");
//var post_stick= document.querySelector("#post-stick");
var pre_stick= document.getElementById("pre-stick");
var post_stick= document.getElementById("post-stick");

function obtenerResolucion(){
  var widthBrowser=$(window).width(); 
  $(window).resize(function() {
    var heightBrowser =$(window).height();
    widthBrowser=$(window).width();  
    console.log(widthBrowser) ;       
  });
  return widthBrowser;      
}

console.log(obtenerResolucion());
//funcion que se activa al mover el scroll
window.onscroll = function() {  
  var y = window.scrollY; //console.log(window.scrollY);    
  if (obtenerResolucion() < 769) {
    $("#pre-stick").css("opacity", "0");
    $("#pre-stick").css("pointer-events", "none");
    $("#post-stick").css("opacity", "1");
    $("#post-stick").css("pointer-events", "auto");
  }else{
    //estamos en pc
    if(y > 32){	   //700    
      //desplazo
      $("#pre-stick").css("opacity", "0");
      $("#pre-stick").css("pointer-events", "none");
      $("#post-stick").css("opacity", "1");
      $("#post-stick").css("pointer-events", "auto");
    }else{
      //normal
      console.log("normal");             
      $("#pre-stick").css("opacity", "1");
      $("#pre-stick").css("pointer-events", "auto");
      $("#post-stick").css("opacity", "0");      
      $("#post-stick").css("pointer-events", "none");     
    }
  }                                                
};



  

