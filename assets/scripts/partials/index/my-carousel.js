export function popularSlider() {
    $(".popularSlider").owlCarousel({
        items: 4,
        rtl: true,
        margin: 10,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
                dots: false
            },
            768: {
                items: 4,
            }
        }

    });
}