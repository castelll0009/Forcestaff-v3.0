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
           })
        
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

//FUNCION QUE CREA LA PLANTILLA HTML APARTIR DE LOS DATOS
function searchShowElements(){
    $("#search").keyup(function(){
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
       })
    
}

function addEditElements(){
    //get datas of html
    let name = $("#name").val();
    let name_autor = $("#name-autor").val();
    let link_autor =$("#link-autor").val();
    let description =$("#description").val();

    $("#search").keyup(function(){
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
       })    
}
