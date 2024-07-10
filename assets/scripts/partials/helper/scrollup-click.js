export function scrollupClick() {
    $('#scroll-up').click(function () {
        $('html, body').animate({scrollTop: '0px'}, 100);
        return false;
    });
}