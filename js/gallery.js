
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
  