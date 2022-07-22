

var correo_recepcion = "coinforcestaff.gmail.com";
$('#id-form-contact-us').submit(e => {  
  event.preventDefault();
  const correo_destinatario1 = "Coinforcestaff@gmail.com";
  const correo_destinatario2 = "castelll0009@gmail.com";
  const fullname = $('#id-fullname').val();
  const email =  $('#id-email').val();
  const phone = $("#id-phone").val();
  const affair = $("#id-affair").val();
  const message = $("#id-message").val();

  window.location.href = `mailto:${correo_destinatario1};${correo_destinatario2}?
  &subject=${affair}&body=Name%20Customer%3A%20${fullname}%0AEmail%3A%20${email}%0APhone%3A%20${phone}%0ALink%20Whatsapp%20(Col)%3A%20%20https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D57${phone}%0AMensaje%3A%20${message}%0A%0A%0A----------------
  `;  
});

/*
$('#id-form-contact-us').submit(e => {
 
  const postData = {      
    //nombre_imagen_portada:  $('#id-image').val().replace(/C:\\fakepath\\/i, ''),      //enviamos el nombre del archivo sin la ruta                   
    fullname:  $('#id-fullname').val(),
    email:  $('#id-email').val(),
    phone: $("#id-phone").val(),
    affair: $("#id-affair").val(),
    message:$("#id-message").val(),
    header:$(correo_recepcion)
  };
  console.log("postData "+postData.fullname);
  
  $.post("backend/enviar_correos_clientes.php", (response) => {    
    //alert(response);
    console.log("RESPUESTA ENVIAR CORREO : "+ response);        
  });
  
});
*/
