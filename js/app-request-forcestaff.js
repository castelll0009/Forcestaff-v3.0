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
        }
    })    
   })
   console.log("exit") ;

});