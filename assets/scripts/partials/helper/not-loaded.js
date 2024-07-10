export function notLoaded() {
    if ( $('.not-loaded').length ) {
        $(window).on('load', function () {
            $('.not-loaded').removeClass('not-loaded')
        })
    }
}