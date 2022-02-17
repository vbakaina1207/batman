const sliderThumbs = new Swiper('.slider-thumbs', {
    loop:true,
    spacebetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides:4,
});

sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
})

const sliderMain = new Swiper('.slider-main', {
    loop:true,
    spacebetween:10,
    loopedSlides:4,
    /*
    thumbs:{
        swiper:sliderThumbs,
    },
    */
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;
