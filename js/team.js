var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    spaceBetween: 80,
    freemode: true,
    centeredSlides: true,
    paginationClickable: true,
    slideToClickedSlide: true,
    freeMode: true,
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
        dynamicBullets: true
    }
});