
  // SWIPER slider  gallery
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
  
  $(document).ready(function() {
    // Swiper: Slider
        new Swiper('.swiper-container', {
            loop: false,   
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 20,
            effect: 'fade',
            navigation: {
                /*
                nextEl: '.next',
                prevEl: '.prev'
                */
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                
            },
            breakpoints: {
                1920: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                1028: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
            
        });
    });

