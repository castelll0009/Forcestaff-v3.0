$('.list-group-item').on('click', function(){        
  
    let element_others =  document.querySelectorAll('.list-group-item');
    let e1 = (element_others[0].children[1]);
    let e2 = (element_others[1].children[1]);
    let e3 = (element_others[2].children[1]);
    $(e1).removeClass('selected');
    $(e2).removeClass('selected');
    $(e3).removeClass('selected');
    

    let element = $(this)[0].children[1];       
    console.log("selecte add" + element);
    $(element).addClass('selected');    
    //$(element).css('opacity' ,'1');    

});