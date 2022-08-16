 //$(".container-form-settings").toggle("show-form-from-left");
 function showForm(){            
    $(".col1-setting").toggle("show-form-from-left");
    console.log("entra");
}

//collapsar navbar
$(".navbar-toggler").on("click",function(){
    CollapseNavBar();
})
function CollapseNavBar(){            
    $("#navbarSupportedContent").toggle("collapse");
}
