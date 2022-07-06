$(document).ready(function() {  
    fetchProducts();// list de  collections
    addEditElements();  
    //editElements();
    searchShowElements();  
    //searchShowElementsByDate();
    //searchShowElementsByDateRanges();
   // eliminarElementos();        
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
  
   // Fetching Products
 function fetchProducts() {
    $.ajax({
      url: 'backend/collections-list.php',
      type: 'GET',
      success: function(response) {
      // console.log("RESPUESTA  FETCH"+ response);
        const elements = JSON.parse(response);              
        //let template_nuevo_producto = '';
        //console.log(products);    
        $('.ul-content-collection').html(getTemplateCardCollection(elements));           
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
            name_collection: $("#name-collection").val(),
            name_autor : $("#name-autor").val(),
            link_autor :$("#link-autor").val(),
            description :$("#description").val()  
          };
          console.log("posData: " + postData.name_collection +" "+ postData.name_autor +" "+ postData.link_autor +" "+ postData.description);          
          /*const url = edit === false ? 'backend/collection-add.php' : 'backend/collection-add.php';   */
          const url = 'backend/collection-add.php';          
          //const  url =  'backend/product-add.php';
          $.post(url, postData, (response) => {
            //edit=false;
            //alert(response);
            console.log("RESPUESTA ADD: "+ response);
            $('#task-form').trigger('reset'); //refresco el formulario 
           // document.getElementById('name-action').innerHTML = 'New Product';
            fetchProducts();
          });
          //location.reload();
    });        
}

//FUNCION QUE CREA LA PLANTILLA HTML APARTIR DE LOS DATOS
function getTemplateCardCollection(jsonElements){
    let template= "";
    jsonElements.forEach(element => {
        
        //let hrefStreaming = getHrefStreaming(product);
        template += `
        <li class="grid-item center  card-castell ">
        <a href="gallery-collection.html">	
        
            <div class="div-content-card-collection">										
                <div class="cont-img-services">	
                    <img class="collection-img-portada" src="imgs/collections/place-holder-portada.png" >																
                </div>
                <div class="card-description ">
                    <div class="cont-3-images">
                        <div class="content-shape-diamond">
                            <div class="cont-circular-img-collection item1-show"> <img src="imgs/collections/placeholder-items.png" ></div>
                        </div>
                        <div class="content-shape-diamond">
                            <div class="cont-circular-img-collection item2-show"> <img src="imgs/collections/placeholder-items.png" ></div>
                        </div>
                        <div class="content-shape-diamond diamond3">
                            <div class="cont-circular-img-collection item3-show"> <img src="imgs/collections/placeholder-items.png" ></div>
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
        </a>									
    </li>	
        `                                           
    });
    return template;
}