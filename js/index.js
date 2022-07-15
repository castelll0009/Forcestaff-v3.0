var estate_video = "play";
$('#cont-video-team').click(function(){   
    if(estate_video =="play")    {
        $('.cont-video-team')[0].pause();
        estate_video = "pause";
    }else{
        $('.cont-video-team')[0].play();
        estate_video = "play";
    }
});
/*CAPTURAS DE PANTALLA*/
/*
const $boton = document.querySelector(".cont-picture-portada"), // El botón que desencadena
$objetivo = document.querySelector("html"); // A qué le tomamos la foto
$contenedorCanvas = document.querySelector("#contenedorCanvas"); // En dónde ponemos el elemento canvas

// Agregar el listener al botón
$boton.addEventListener("click", () => {
html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
  .then(canvas => {
    // Cuando se resuelva la promesa traerá el canvas
    $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
  });
});
*/
 