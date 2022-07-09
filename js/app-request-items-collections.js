var ruta_img_item_defecto = "imgs/collections/placeholder-items.png"
var edit = false; 

$(document).ready(function() { 
    searchShowElements();   
    fetchProducts();// list de  collections
    addEditElements();  
    searchListCollectionSelect();
    ListCollectionsSelect();    
    editElements();        
    deleteElements();    
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
                url: "backend/items-collection-search.php",
                type: "POST",
                data: {search},
                success: function(response){
                    console.log(response);
                    if(!response.error) {
                        let elements = JSON.parse(response);                                                      
                        $('.ul-content-collection').html(getTemplateCardItemsCollection(elements));                         
                    }
                }
            })
        }
    });    
        
    
    
}

function fetchProducts() {
$.ajax({
    url: 'backend/items-collections-list.php',
    type: 'GET',
    success: function(response) {
    // console.log("RESPUESTA  FETCH"+ response);
    const elements = JSON.parse(response);              
    //let template_nuevo_producto = '';
    console.log(elements);    
    $('.ul-content-collection').html(getTemplateCardItemsCollection(elements));        
    //$('.ul-list-items-collection').html(getTemplateCardItemsCollection(elements));      
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
            id_item_collection: $('#id-select-collection option:selected').val(),  
            //nombre_imagen_portada:  $('#id-image').val().replace(/C:\\fakepath\\/i, ''),      //enviamos el nombre del archivo sin la ruta                   
            ruta_img_item:  $('#id-ruta-img-item').val(),
            name_item: $("#name-item").val(),
            collection_owner : $("#collection-owner").val(),
            price :$("#price").val(),        
          };
               
          console.log("ruta imagen item:  "+ postData.ruta_img_item +" id_item_coleccion: "+postData.id_item_collection +" posData: " + postData.name_item +" "+ postData.collection_owner +" "+ postData.price);          
          const url = edit === false ? 'backend/item-collection-add.php' : 'backend/item-collection-edit.php';   
          //const url = 'backend/item-add.php';          
          //const  url =  'backend/product-add.php';
          $.post(url, postData, (response) => {
            edit=false;
            //alert(response);
            console.log("RESPUESTA ADD ITEMS: "+ response);
         
            $("#id-image").val("");
            $(".card-img-top").attr("src", ruta_img_item_defecto);
            $('#task-form').trigger('reset'); //refresco el formulario           
           // document.getElementById('name-action').innerHTML = 'New Product';
            fetchProducts();
          });
          //location.reload();
    });        
}
function searchListCollectionSelect(){
    $('#id-input-search-collections').keyup(function() 
    {              
        if( ($('#id-input-search-collections').val()) == "" ){   
          //esta  vacio el search por ende  solo  enlistamos  los productos             
           ListCollectionsSelect();
        }else{        
          //hay una busqueda en proceso enlistamoss la conincidencias dentro del select
          //alert("esta  lleno y contiene: " + $('#search').val() );
          let search_collections = $('#id-input-search-collections').val();        
          $.ajax(
            {
              url: 'backend/collections-list-name-autor.php',        
              type: 'POST',
              data: {search_collections}, //podemos enviar string , objetos    
              success: function(response)
              {      
                //alert("RESPONSE SEARH Collections" + response);              
                const products = JSON.parse(response);             
                //let template_nuevo_producto = '';   
                $("#id-select-collection").empty(); //vaciamos los Collections que hay en el select para poner unicamente los filtrados por search
                products.forEach(product =>
                {
                //insertar los productos en  el select  insertamos options en el select de 
                //creamos una cadena con los nombres y autor del collection
                let cadenaNombreAutorIDcollection = `${product.nombre_coleccion}  ${product.autor}`;        
                //alert(cadenaNombreAutorIDcollection);
                const option = document.createElement('option');        
                const valor = product.id; //le pasamos al option creado el valor del arreglo y la posicion correspodientes   
                option.value = valor;
                option.text = cadenaNombreAutorIDcollection;
                document.querySelector("#id-select-collection").appendChild(option); //agregamos la n ueva option creada con el valor  al selector                                                
                });
              }          
            })        
        }               
    });
}
//enlistar collectiones en el select del formulario 
function ListCollectionsSelect(){
    $("#id-select-collection").empty(); //limpiamos antes de enlistar
    $.ajax({
      url: 'backend/collections-list-select.php',
      type: 'GET',
      success: function(response) {
        //console.log("RESPUESTA  SEARCH LIST"+ response);
        const products = JSON.parse(response);             
        //let template_nuevo_producto = '';
        //console.log(products);
        products.forEach(product =>{
          //insertar los productos en  el select  insertamos options en el select de 
          //creamos una cadena con los nombres y telefono del usuario
          let cadenaNameAutorIDUsuario = `${product.nombre_coleccion}  ${product.autor}`;        
          //alert(cadenaNameAutorIDUsuario);
          const option = document.createElement('option');        
          const valor = product.id; //le pasamos al option creado el valor del arreglo y la posicion correspodientes   
          option.value = valor;
          option.text = cadenaNameAutorIDUsuario;
          document.querySelector("#id-select-collection").appendChild(option); //agregamos la n ueva option creada con el valor  al selector                                              
        });          
      }
    });
}
function editElements(){  
    //////////EDITAR PRODUCTOS- cargar datos en el formulario
    $(document).on('click', ".item-collection", function(){         
      let  element = $(this)[0];
      let id = $(element).attr("taskId");
       console.log(element +" "+id);     
       //primero obtenemos los datos del elemtno clickeado                 
       
       $.post('backend/item-collections-select-single.php', {id}, function(response){
            edit = true;
            //console.log("Edit Elements "+ response);
            const task  = JSON.parse(response);          
            //alert(auxNewfecha) ;
            //const task  = response;
            //entregamos los datos a las etiquetas
            $(".card-img-top").attr("src",task.ruta_img_item);      
            $('#id-image').val("");
            //alert(task.pin);
            //$('#ruta_img_portada').val(task.ruta_img_portada);                     
            $('#id-ruta-img-item').val(task.ruta_img_item);      
            $('#id-select-collection').val(task.id_usuario);                       
            $('#name-item').val(task.nombre_item);            
            $('#collection-owner').val(task.coleccion_pertenece);
            $('#price').val(task.precio);                          
            //$('#').checked =(task.estado_cuenta);           
            $('#taskId').val(task.id);                                  
       })         
     
  });
}
function deleteElements(){   
    $(document).on('click', ".btn-item-collection-delete", function(event){
        event.stopPropagation();
      if(confirm("Are  you sure you want to delete this item?")){
          let element = $(this)[0].parentElement.parentElement;   
          let id = $(element).attr('taskId');
          console.log("id delete " + id);
          $.post('backend/item-collection-delete.php', {id}, function (response){
              console.log("delete "+ response);
              fetchProducts();
          })
      }              
    }); 
    $('#task-form').trigger('reset'); //refresco el formulario      
}
//FUNCION QUE CREA LA PLANTILLA HTML APARTIR DE LOS DATOS
function getTemplateCardItemsCollection(jsonElements){
    let template= "";   
    jsonElements.forEach(element => {
        
        //let hrefStreaming = getHrefStreaming(product);
        template += `
        <li  taskId="${element.id}" class="grid-item center item-collection card ">
            <div class="div-content-card">
            <span id="taskId">${element.id}</span>	
            <span class="btn-item-collection-delete"><i class="fa-solid fa-trash-can"></i></span>
                <div class="cont-img-services test-card ">	
                    <img src="${element.ruta_img_item}">						
                    <a style="background:#6421ff">								
                    </a>
                </div>
                <div class="card-description test-card">
                    <section class="captions-card-description">
                        <h4 class="test-card">${element.nombre_item}</h4>
                        <h5 class="second-title-card">${element.coleccion_pertenece} <i class="fa-regular fa-circle-check"></i></h5>
                    </section>
                    
                    
                    <div class="footer-cards">
                        <div class="read-more-card">read more</div>
                        <div class="info-card">
                            <p class="p-price">Price</p>
                            <div class="info-card__img-price-value">
                                <span class="span-icon-solana"> <img src="imgs/icon-solana.png" ></span>
                                <p class="p-price-value">${element.precio}</p>
                            </div>                            
                        </div>																
                        
                        <a class="hire-card " href="#"><div class="icon"><i class="fa-solid fa-cart-plus"></i></div><div class="text">Buy</div></a>
                    </div>							
                </div>
            </div>						
        </li>	
        `                                           
    });
    return template;
}