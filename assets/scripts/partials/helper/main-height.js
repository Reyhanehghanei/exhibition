export function mainHeight() {
    const footerHeight = $('#main-footer').innerHeight()
    const headerHeight = $('#main-header').innerHeight();
    const footerHeightVh = convertToVh(footerHeight);
    const headerHeightVh = convertToVh(headerHeight);
    const mainHeight = (100 - footerHeightVh - headerHeightVh )
    if ( mainHeight > 0 ) {
        $('main').css('min-height',`${mainHeight}vh`)
    }
}

function convertToVh(size) {
    const viewPortSize = $(window).innerHeight()
    return 100 * ( size / viewPortSize )
}