const swiper = new Swiper('.swiper.activities', {
    direction: 'horizontal',
    loop: true,
    initialSlide: 0,
    spaceBetween: 18,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        1240: {
          slidesPerView: 3,
          centeredSlides: false,
          autoplay: false,
        },
        600: {
            slidesPerView: 2,
        }
    }
  });