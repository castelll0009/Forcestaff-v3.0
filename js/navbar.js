(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
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
  /*
var var_header= document.querySelector(".navigation");
window.onscroll = function() {
  var y = window.scrollY;
  if(y > 32){	  	  
	var_header.style  =   "background-color :  rgb(0, 0, 0,0.7);";
  }else{
	var_header.style  =   "background-color : transparent";
  }
    
};
*/