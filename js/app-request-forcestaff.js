var edit = false; 
$(document).ready(function() {  
    fetchProducts();// list de  collections
    addEditElements();  
    editElements();
    searchShowElements();  
    deleteElements();  
    gotoEditItemCollection();     
    //searchShowElementsByDate();
    //searchShowElementsByDateRanges();
    //ListUsuariosSelect();     
  });
  
//FUNCIONES   

function searchShowElements(){
    $("#search").keyup(function(){
        if( ($('#search').val()) == "" ){   
            //esta  vacio el search por ende  solo  enlistamos  los productos       
            fetchProducts();
        }else{
            let search = $("#search").val();       
            $.ajax({
                url: "backend/search-collection.php",
                type: "POST",
                data: {search},
                success: function(response){
                    console.log(response);
                    if(!response.error) {
                        let elements = JSON.parse(response);                                                      
                        $('.ul-content-collection').html(getTemplateCardCollection(elements));                         
                    }
                }
            })
        }
    });    
        
    
    
}

function fetchProducts() {
$.ajax({
    url: 'backend/collections-list.php',
    type: 'GET',
    success: function(response) {
    // console.log("RESPUESTA  FETCH"+ response);
    const elements = JSON.parse(response);              
    //let template_nuevo_producto = '';
    console.log(elements);    
    $('.ul-content-collection').html(getTemplateCardCollection(elements));  
    $('.ul-list-collections-gallery').html(getTemplateCardCollectionGallery(elements));   //listar en gallery                 
    //todos     
    }
});
}

function addEditElements(){
    //send this datas  whit POST
    $('#task-form').submit(e => {
   
        e.preventDefault(); //previene  que la  pagina  se recargue automaticamente
          const postData = {
            id: $('#taskId').val(), 
            //nombre_imagen_portada:  $('#id-image').val().replace(/C:\\fakepath\\/i, ''),      //enviamos el nombre del archivo sin la ruta                   
            ruta_img_portada:  $('#id-ruta-img-portada').val(),
            name_collection: $("#name-collection").val(),
            name_autor : $("#name-autor").val(),
            link_autor :$("#link-autor").val(),
            description :$("#description").val()  
          };
               
          console.log("nombre imagen portada: "+ postData.nombre_imagen_portada+" ruta imagen portada:  "+ postData.ruta_img_portada + " posData: " + postData.name_collection +" "+ postData.name_autor +" "+ postData.link_autor +" "+ postData.description);          
          const url = edit === false ? 'backend/collection-add.php' : 'backend/collection-edit.php';   
          //const url = 'backend/collection-add.php';          
          //const  url =  'backend/product-add.php';
          $.post(url, postData, (response) => {
            edit=false;
            //alert(response);
            console.log("RESPUESTA ADD: "+ response);
         
            $("#id-image").val("");
            $(".card-img-top").attr("src", ruta_img_portada_defecto);
            $('#task-form').trigger('reset'); //refresco el formulario           
           // document.getElementById('name-action').innerHTML = 'New Product';
            fetchProducts();
          });
          //location.reload();
    });        
}
function editElements(){  
    //////////EDITAR PRODUCTOS- cargar datos en el formulario
    $(document).on('click', ".item-collection", function(){         
      let  element = $(this)[0];
      let id = $(element).attr("taskId");
       console.log(element +" "+id);     
       //primero obtenemos los datos del elemtno clickeado                 
       
       $.post('backend/collections-select-single.php', {id}, function(response){
            edit = true;
            //console.log("Edit Elements "+ response);
            const task  = JSON.parse(response);          
            //alert(auxNewfecha) ;
            //const task  = response;
            //entregamos los datos a las etiquetas
            $(".card-img-top").attr("src",task.ruta_img_portada);      
            $('#id-image').val("");
            //alert(task.pin);
            //$('#ruta_img_portada').val(task.ruta_img_portada);                     
            $('#id-ruta-img-portada').val(task.ruta_img_portada);                         
            $('#name-collection').val(task.nombre_coleccion);            
            $('#name-autor').val(task.autor);
            $('#link-autor').val(task.link_autor);        
            $('#description').val(task.descripcion);                      
            //$('#').checked =(task.estado_cuenta);           
            $('#taskId').val(task.id);     
                             
       })         
     
  });
}
function deleteElements(){   
    $(document).on('click', ".btn-collection-delete", function(event){
        event.stopPropagation();
      if(confirm("Are  you sure you want to delete this item?")){
          let element = $(this)[0].parentElement.parentElement;   
          let id = $(element).attr('taskId');
          //console.log("id delete " + id);
          $.post('backend/collection-delete.php', {id}, function (response){
              console.log("delete "+ response);
              fetchProducts();
          })
      }              
    }); 
    $('#task-form').trigger('reset'); //refresco el formulario      
}
//FUNCION QUE CREA LA PLANTILLA HTML APARTIR DE LOS DATOS
function getTemplateCardCollection(jsonElements){
    let template= "";   
    let  ruta_item_defecto = "imgs/collections/placeholder-items.png";
    jsonElements.forEach(element => {
        if(element.ruta_img_item1 == null){
            img_item1 = ruta_item_defecto;        
           }else{
            img_item1 = element.ruta_img_item1;        
           }
    
           if(element.ruta_img_item2 == null){
            img_item2 = ruta_item_defecto;        
           }else{
            img_item2 = element.ruta_img_item2;        
           }
    
           if(element.ruta_img_item3 == null){
            img_item3 = ruta_item_defecto;        
           }else{
            img_item3 = element.ruta_img_item3;        
           }
        //let hrefStreaming = getHrefStreaming(product);
        template += `
        <li taskId="${element.id}" class="grid-item center item-collection  card-castell ">
     
        
            <div class="div-content-card-collection">	
            <span id="taskId">${element.id}</span>	
            <span class="btn-collection-delete"><i class="fa-solid fa-trash-can"></i></span>								
                <div class="cont-img-services">	
                    <img class="collection-img-portada" src="${element.ruta_img_portada}" >																
                </div>
                <div class="card-description ">
                    <div class="cont-3-images">
                        <div class="content-shape-diamond trigger-gotoEditItemCollection">
                            <div class="cont-circular-img-collection item1-show"> <img src="${img_item1}" ></div>
                        </div>
                        <div class="content-shape-diamond trigger-gotoEditItemCollection">
                            <div class="cont-circular-img-collection item2-show"> <img src="${img_item2}" ></div>
                        </div>
                        <div class="content-shape-diamond trigger-gotoEditItemCollection diamond3">
                            <div class="cont-circular-img-collection item3-show"> <img src="${img_item3}" ></div>
                        </div>	
                                                                    
                    </div>

                    <h4 class="">${element.nombre_coleccion}</h4>
                    <div class="card-description__created-by">
                        <h5 >by</h5>
                        <a href="${element.link_autor}" class="text-card__creator">${element.autor} <i class="fa-regular fa-hand-point-left"></i></a>
                    </div>
            
                
                    <div class="description-collection">
                        <p>
                        ${element.descripcion}
                        </p>
                    </div>									
                </div>
            </div>										
    </li>	
        `                                           
    });
    return template;
}
function getTemplateCardCollectionGallery(jsonElements){ //listar en GALLERY
    let template= "";
    let  ruta_item_defecto = "imgs/collections/placeholder-items.png";
    jsonElements.forEach(element => {
       if(element.ruta_img_item1 == null){
        img_item1 = ruta_item_defecto;        
       }else{
        img_item1 = element.ruta_img_item1;        
       }

       if(element.ruta_img_item2 == null){
        img_item2 = ruta_item_defecto;        
       }else{
        img_item2 = element.ruta_img_item2;        
       }

       if(element.ruta_img_item3 == null){
        img_item3 = ruta_item_defecto;        
       }else{
        img_item3 = element.ruta_img_item3;        
       }
        //let hrefStreaming = getHrefStreaming(product);
        template += `
        <li taskId="${element.id}" class="grid-item center item-collection  card-castell ">
     
        
            <div class="div-content-card-collection">	                  							
                <div class="cont-img-services">	
                    <img class="collection-img-portada" src="${element.ruta_img_portada}" >																
                </div>
                <div class="card-description ">
                    <div class="cont-3-images">
                        <div class="content-shape-diamond">
                            <div class="cont-circular-img-collection item1-show"> <img src="${img_item1}" ></div>
                        </div>
                        <div class="content-shape-diamond">
                            <div class="cont-circular-img-collection item2-show"> <img src="${img_item2}" ></div>
                        </div>
                        <div class="content-shape-diamond diamond3">
                            <div class="cont-circular-img-collection item3-show"> <img src="${img_item3}" ></div>
                        </div>	
                                                                    
                    </div>

                    <h4 class="">${element.nombre_coleccion}</h4>
                    <div class="card-description__created-by">
                        <h5 >by</h5>
                        <a href="${element.link_autor}" class="text-card__creator">${element.autor} <i class="fa-regular fa-hand-point-left"></i></a>
                    </div>
            
                
                    <div class="description-collection">
                        <p>
                        ${element.descripcion}
                        </p>
                    </div>									
                </div>
            </div>										
    </li>	
        `                                           
    });
    return template;
}
function gotoEditItemCollection(){
    $(document).on('click', ".trigger-gotoEditItemCollection", function(){ 
        window.open("http://forcestaff-v3.0.test/admin-items-collections.html"); //nueva pentaña
    });
}