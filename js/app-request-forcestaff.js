$(function(){
   console.log("jquery is  working") ;

   $("#search").keyup(function(){
    let search = $("#search").val();
    
    $.ajax({
        url: "backend/search-collection.php",
        type: "POST",
        data: {search},
        success: function(response){
            console.log(response);
            if(!response.error) {
                let tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(task => {
                    alert(task.ruta_img_portada);
                  template += `
                  <li class="grid-item center  card-castell ">
                  <a href="gallery-collection.html">	
                  
                      <div class="div-content-card-collection">
                          <div class="cont-img-services">	
                              <img class="collection-img-portada" src="${task.ruta_img_portada}" >						
                          
                          </div>
                          <div class="card-description ">
                              <div class="cont-circular-img-collection "> <img src="imgs/collections/1 (1).gif" alt=""></div>
                              <h4 class="">Project Genesis</h4>
                              <div class="card-description__created-by">
                                  <h5 >by</h5>
                                  <a href="https://castelll0009.github.io/Forcestaff-v3.0/" class="text-card__creator">ForceStaff <i class="fa-regular fa-hand-point-left"></i></a>
                              </div>
                      
                          
                              <div class="description-collection">
                                  <p>
                                  This is the description of this collection, 
                                  here you can find information such as the historical context of the collection and curiosities.
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti officia eius harum, assumenda laudantium aliquam doloribus possimus dolor asperiores nam nesciunt placeat cumque impedit ratione maiores tempora! Aliquam, voluptatum.
                                  </p>
                              </div>									
                          </div>
                      </div>	
                  </a>									
              </li>	
                        ` 
                });                
                $('.col2-list-collections').html(template);
            }
        }
    })    
   })
   console.log("exit") ;

});