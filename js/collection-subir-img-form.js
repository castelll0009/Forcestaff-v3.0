
 var ruta_img_portada_global;
 var ruta_carpeta_colecciones = "imgs/collections/";
 var ruta_img_portada_defecto = "imgs/collections/place-holder-portada.png";

 $(".form-control-file").on("change", () => {
  crearFotoDerecho();

});
function crearFotoDerecho(){
    //0.- Recuperar datos
    let file = document.getElementById("id-image").files[0];  
  
    const reader = new FileReader();
        reader.addEventListener('load', (event) => {
        document.getElementById("imgPreview").src = event.target.result;
    });
  
    reader.readAsDataURL(file);
  }
    $(".upload").on('click', function() {
        //si no tengo nada para subir el subir no deberia servir
        if( $('#id-image').val() === ''){ //si no se carga niguna imagen
            $(".card-img-top").attr("src", ruta_img_portada_defecto);   
            $("#id-ruta-img-portada").val("");                     
        }else{                              
            uploadImg();                       
        }
       
        /*
        if( $('#id-image').val() === ''){ //si no se carga niguna imagen
            $(".card-img-top").attr("src", ruta_img_portada_defecto);   
            $("#id-ruta-img-portada").val("");                     
        }else{  
            if(edit == true &&   $("#id-ruta-img-portada").val() == ""){
                $(".card-img-top").attr("src", ruta_img_portada_defecto);   
           //     $(".card-img-top").attr("src",  $("#id-ruta-img-portada").val());    // le pasamos la imagen que ya tenia
                $("#id-ruta-img-portada").val(ruta_carpeta_colecciones+$('#id-image').val().replace(/C:\\fakepath\\/i, ''));     
                uploadImg();                   
            }else{ // es porque estamos agregando solo usamos el nombre
                //$("#id-ruta-img-portada").val($('#id-image').val().replace(/C:\\fakepath\\/i, '') );                                                          
                uploadImg();
            }                       
        }   
        */   
		return false;
    });

function uploadImg(){
    var formData = new FormData();
    var files = $('#id-image')[0].files[0];
    formData.append('file',files);
    $.ajax({
        url: 'backend/collection-subir-img-form.php',
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
            if (response != 0) {
                $(".card-img-top").attr("src", response);
                $("#id-ruta-img-portada").val($(".card-img-top").attr("src")); 
                //console.log("response subir img js", response);
                ruta_img_portada_global = response;
                console.log("ruta imagen portada global: " + ruta_img_portada_global);
            } else {
                alert('Formato de imagen incorrecto.');
            }
        }
    });
}

