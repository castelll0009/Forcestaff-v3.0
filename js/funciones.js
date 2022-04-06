
 var resolucionMobil = 769;
 if(obtenerResolucion() > resolucionMobil){
    navBarApareceMovimientoMouse();
 }
 
 

function navBarApareceMovimientoMouse(){
    var timeout;
    post_stick = document.getElementsByClassName("post-stick");
    document.onmousemove = function(){
        //alert("moviendo");
        clearTimeout(timeout);
        //aparece post-stick menus
        //desaparece pre-stick solo botones login y wallet
        $("#post-stick").css("opacity", "1");
        $("#post-stick").css("pointer-events", "auto");  
        $("#pre-stick").css("opacity", "0");
        $("#pre-stick").css("pointer-events", "none");
        timeout = setTimeout(function(){   
            var y = window.scrollY;
            if(y <= 32)         {
                $("#post-stick").css("opacity", "0");
                $("#post-stick").css("pointer-events", "none");
            }                     
        }, 1000);
    }
}
