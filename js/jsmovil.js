$('.submenu-ul ').hide();

$(window).resize(function(){
    if($(window).width() > 1000){
        
    $('.submenu-ul ,li').unbind('click');
    $('.submenu-ul ,li').unbind('click');
    $('.submenu-ul ').hide();

        $('.submenu-ul ,li').bind('mousemove', function(){
            $(this).children("ul").fadeIn(200);
        })
        $('.submenu-ul ,li').bind('mouseleave', function(){
            $(this).children("ul").fadeOut(200);
        })
    }else{
    
        $('.submenu-ul ,li').unbind('mousemove');
        $('.submenu-ul ,li').unbind('mouseleave');
    
        var show_submenu1 = 0;
        var show_submenu2 = 0;
    
        $('.submenu-ul ,li').bind('click', function(){    
            if(show_submenu1 == 0){
                $(this).children("ul").slideDown();            
                show_submenu1 = 1;
            }else{
                $(this).children("ul").slideUp();
                show_submenu1 = 0;
            }            
        })  
        /*      
        //Pendiente el funcionamiento del submenu
        $('.submenu-web-ul-li-ul ,li').bind('click', function(){                
            if(show_submenu2 == 0 ){                
                $(this).children("ul").slideDown();                 
                show_submenu2 = 1;
            }else{
                $(this).children("ul").slideUp();
                show_submenu2 = 0;                                  
            }            
        })    
        */   
        $('.menu ul ,li').on('click', function(e){
            e.stopInmediatePropagation()
        })
    }

})