var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
        //initialSlide: 3,
    loop: false,
    navigation: {
        /*
        nextEl: '.next',
        prevEl: '.prev'
        */
        nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
    },
    // mousewheel: {
    //     // invert: false
    // },
    
    on: {
        init: function(){
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log("target" +target);       
            

            $('.product-img__item').removeClass('active');
            $('.product-img__item#'+ target).addClass('active');
           
        }
    }
    

});

    swiper.on('slideChange', function () {        
        
        var index = this.activeIndex;

        var target = $('.product-slider__item').eq(index).data('target');

        console.log("swiper on "+ target);
      
     

        $('.product-img__item').removeClass('active');
        $('.product-img__item#'+ target).addClass('active');

        if(swiper.isEnd) {
            $('.prev').removeClass('disabled');
            $('.next').addClass('disabled');
        } else {
            $('.next').removeClass('disabled');
        }

        if(swiper.isBeginning) {
            $('.prev').addClass('disabled');
        } else {
            $('.prev').removeClass('disabled');
        }
    });

    $(".js-fav").on("click", function() {
        $(this).find('.heart').toggleClass("is-active");
    });

//CIRCLE PROGRESS
//obtenemos el porcentaje escrito en la div
UpdatePctCircle();
function UpdatePctCircle(){
    var radio = $(".main-circle").attr("r"); //radio
    var circle = $('#bar');   //circle
    var pct = parseInt($(".product-inf__percent-txt").text());   //pct
    
    var stroke_dasharray =  ( 2 * (22 / 7) * radio ) ; //calculamos el dash array
    var stroke_dashoffset = ( 1 - pct / 100 ) * (2 * (22 / 7) * radio); //calculamos el dash offset
    //console.log("radio: "+ radio  + " porcentaje recibido : " + pct +" stok das array " + stroke_dasharray);
    //console.log("stroke_dashoffset "+ stroke_dashoffset);
    //circle.setAttribute("stroke-dasharray", stroke_dasharray); //insertamos el trazo en porcentaje
    
    //reiniciamos a cero 
    circle.attr("stroke_dasharray", stroke_dasharray );
    circle.attr("stroke_dashoffset", stroke_dasharray );

    circle.css({ strokeDasharray: stroke_dasharray});
    circle.css({ strokeDashoffset: stroke_dasharray});

    circle.css({ strokeDasharray: stroke_dasharray});
    circle.css({ strokeDashoffset: stroke_dashoffset});
    
    console.log("attr array"+ circle.attr("stroke_dasharray"));
    console.log("attr offset "+ circle.attr("stroke_dashoffset"));
}

//circle.setAttribute("stroke-dashoffset", stroke_dashoffset); //insertamos el trazo en porcentaje
//procedemos a poner el valor  del 	// percent for dashoffset
//console.log("sdsadasd"+circle.css({ strokeDashoffset: p}));

/*  
stroke-dasharray: $circle-circumstance;
stroke-dashoffset: ( 0.3 * $circle-circumstance);

var val = parseInt($(".product-inf__percent-txt").text());  
var circle = $('#bar');  
console.log(progress_circle)  ;
console.log(progress_circle)  ;
if (isNaN(val)) {
  //si no tiene ninguna valor el h1 por defecto0 mandamos un 100%
 val = 100; 
}
else{
  //calculamos el valor para llenar la barra circular
  var r = progress_circle.attr('r');
  console.log("r "+r);
  var c = Math.PI*(r*2);    
 
  if (val < 0) { val = 0;}
  if (val > 100) { val = 100;}
  
  var pct = ((100-val)/100)*c;
  console.log("pct" + pct);   
  pct =56.54866776461628;     
  progress_circle.css({ strokeDashoffset: pct});
  //cambiamos el valor de el h1 %
  
    $('.product-inf__percent-txt').text(val);
}
/*
//obtenemos el porcentaje escrito en la div
  var val = parseInt($(".product-inf__percent-txt").text());  
  var progress_circle = $('#bar');  
  console.log(progress_circle)  ;
console.log(progress_circle)  ;
  if (isNaN(val)) {
    //si no tiene ninguna valor el h1 por defecto0 mandamos un 100%
   val = 100; 
  }
  else{
    //calculamos el valor para llenar la barra circular
    var r = progress_circle.attr('r');
    console.log("r "+r);
    var c = Math.PI*(r*2);    
   
    if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    
    var pct = ((100-val)/100)*c;
    console.log("pct" + pct);   
    pct =56.54866776461628;     
    progress_circle.css({ strokeDashoffset: pct});
    //cambiamos el valor de el h1 %
    
      $('.product-inf__percent-txt').text(val);
  }

    /*cricle progress bar*/
/*const swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	centeredSlides: true,
	slidesPerView: 1,
    spaceBetween: 0,
	loop: false,
	speed: 600,
	
 	autoplay: {
		delay: 3000,
 	},
	
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		560: {
			slidesPerView: 3,
		},
		990: {
			slidesPerView: 4,
		}
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
*/