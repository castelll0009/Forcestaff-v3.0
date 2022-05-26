
$('.cont-photos-gallery').on('click', function() {
    event.stopPropagation();
});
$('.cont-swiper-slide-photos').toggle('show-item');

    $('.cont-swiper-slide-photos').on('click', function() {
        $('.cont-swiper-slide-photos').toggle('show-item');
        //alert("click");
    });
  
    $('.btn-back-gallery').on('click', function() {
        $('.cont-swiper-slide-photos').toggle('show-item');
        event.stopPropagation();
        //alert("click");
    });

   // Hamburger toggle
   $('.img-box').on('click', function() {
    $('.cont-swiper-slide-photos').toggle('show-item');
    //alert("click");
  });
  

  // SWIPER slider  gallery

  var swiper = new Swiper('.swiper-container-collections', {
    grabCursor: true,
    spaceBetween: 80,
    freemode: true,
    centeredSlides: true,
    paginationClickable: true,
    slideToClickedSlide: true,    
    loop: false,
    speed:1000,
    slidesPerView: 'auto',
    effect: 'coverflow',   
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows : false
    },
    pagination: {
        el: '.swiper-pagination',    
        dynamicBullets: false,
        clickable: true    ,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',              
    },
    on: { 
        init: function(){        
            var index = this.activeIndex;            
            $('.swiper-pagination-bullet').eq(index).trigger('click'); //redirecciona haciendo click en el swiper-paginattion correspondiente POOM

            //activamos la clase activa para el swiper de las caras
            var target_circle_swiper = $('.circle-shadow').eq(index); //eq indica el indice actual de una lista de elementos , 
            $('.circle-shadow').removeClass('active-circle');
            target_circle_swiper.addClass('active-circle');             
        }
    }
});

swiper.on('slideChange', function () {   //Swipoer in movement  
    var index = this.activeIndex;            
    $('.swiper-pagination-bullet').eq(index).trigger('click'); //redirecciona haciendo click en el swiper-paginattion correspondiente POOM

    //activamos la clase activa para el swiper de las caras
    var target_circle_swiper = $('.circle-shadow').eq(index); //eq indica el indice actual de una lista de elementos , 
    $('.circle-shadow').removeClass('active-circle');
    target_circle_swiper.addClass('active-circle');  
             
});