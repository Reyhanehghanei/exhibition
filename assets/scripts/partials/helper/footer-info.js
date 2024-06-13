export function footerInfo() {
    if ( $('.footer-info__itsa').length ) {
        $('.footer-info__itsa').hover(function () {
            $('#footer-gif').attr('src','assets/images/content/itsa-logo-.gif')
            $('#footer-gif').attr('src','assets/images/content/itsa-logo.gif')
        })
    }
}