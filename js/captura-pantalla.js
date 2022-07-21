/*CAPTURAS DE PANTALLA*/
const $boton = document.querySelector(".picture-img-logo"), // El botón que desencadena
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

 