export function searchModal() {
    $('.search-button-item').on('click', function () {
        $('body').addClass('search-active');
    });
    $('.search-popup .close-item').on('click', function () {
        $('body').removeClass('search-active');
        $('.modal-backdrop ').click()
    });
}