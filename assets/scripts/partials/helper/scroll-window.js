export function scrollWindow() {
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        // scroll up setup
        if (scrollTop > 750 ) {
            let bottom = 20
            $('#scroll-up').css({bottom: `${bottom}px`, opacity: "1"});
        } else {
            $('#scroll-up').css({bottom: "-100px"});
        }
    });
}