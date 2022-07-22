
/*var correo_recepcion = "coinforcestaff.gmail.com";
const postData = {      
    //nombre_imagen_portada:  $('#id-image').val().replace(/C:\\fakepath\\/i, ''),      //enviamos el nombre del archivo sin la ruta                   
    fullname:  $('#id-fullname').val(),
    email:  $('#id-email').val(),
    phone: $("#id-phone").val(),
    affair: $("#id-affair").val(),
    message:$("#id-message").val(),
    header:$(correo_recepcion)
  };

  console.log(postData.fullname);
  */
$.post("backend/enviar_correos_clientes.php",postData, (response) => {    
    //alert(response);
    console.log("RESPUESTA ENVIAR CORREO : "+ response);        
});