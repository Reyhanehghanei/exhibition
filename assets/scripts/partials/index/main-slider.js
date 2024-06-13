export function mainSlider() {
    $('.bxslider').bxSlider({
        mode : 'horizontal',
        speed : 2000,
        startSlide : 1,
        infiniteLoop : false,
        hideControlOnEnd : false,
        captions : false,
        auto : true,
        controls:false,
        autoControls : false
    });
}

