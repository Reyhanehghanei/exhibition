export function mainNav() {

    const hamburger = $(".toggler");
    const menu = $(".main-navbar");

    // mobile main nav active toggling
    $(window).resize(function () {
        let windowSize = $(this).innerWidth()
        if (windowSize > 992 ) {
            if ( menu.hasClass('active') ) {
                menu.removeClass('active')
                hamburger.removeClass('active')
                $('.main-nav li .sub-nav-wrapper.show').removeClass('show')
            }
        } else {
            $('.sub-nav-wrapper:visible').css('display','none')
        }
    })

    // adding angle left or right icon to li has sub menu depends on site lang
    if ( $('html').attr('lang') !== 'en' ) {
        $('.main-nav li:has(div)')
            .children('a')
            .append('<i class="icon-angle-left main-nav-icon"></i>')
    } else {
        $('.main-nav li:has(div)')
            .children('a')
            .append('<i class="icon-angle-right main-nav-icon"></i>')
    }

    // main nav hover handler
    $('.main-nav li:has(div)').hover(function () {
        if ( !menu.hasClass('active') ) {
            $(this).children('div').addClass('show')
        }
    },function () {
        if ( !menu.hasClass('active') ) {
            $(this).children('div').removeClass('show')
        }
    })

    // main nav mobile click handler
    $('.main-nav li:has(div) a').click( function () {
        if ($('.main-navbar').hasClass('active') ) {
            if ($(this).siblings('div').is(":visible") ) {
                $(this).siblings('div').removeClass('show')
                $(this).siblings('div').slideUp()
                $(this).removeClass('isShow')
            } else {
                $(this).siblings('div').addClass('show')
                $(this).siblings('div').slideDown()
                $(this).addClass('isShow')
            }
        }
    })

    const subMenus = $('.main-nav li:has(div)')
    for ( const item of subMenus ) {
        findLeft(item)
    }

    $(window).resize(function () {
        for ( const item of subMenus ) {
            findLeft(item)
        }
    })
}

function findLeft(el) {
    if ( $(el).hasClass('main-nav__item')) {
        let left = $(window).innerWidth()
        if ( $('html').attr('lang') === 'en' && !$(el).children('.sub-nav-wrapper').hasClass('wide-lg') ) {
            let windowWidth = $(window).innerWidth()
            let wrapperWidth = $(el).children('.sub-nav-wrapper').innerWidth()
            let mainLeft = $('.main-navbar').position().left
            let thisLeft = $(el).position().left
            left = (windowWidth) - ( wrapperWidth + mainLeft + thisLeft )
        } else if ( $('html').attr('lang') !== 'en' && !$(el).children('.sub-nav-wrapper').hasClass('wide-lg') ) {
            left = $('.main-navbar').position().left + $(el).innerWidth() + $(el).position().left - $(el).children('.sub-nav-wrapper').innerWidth()
        } else if ( $('html').attr('lang') !== 'en' && $(el).children('.sub-nav-wrapper').hasClass('wide-lg') ) {
            const li = $(el).children('.sub-nav-wrapper').find('.sub-nav-wrapper').first('.sub-nav-wrapper').parent('li')
            const padding = 30.56
            left = $(li).position().left
            if ($(li).is(':first-child') || $(li).is(':nth-child(6)') || $(li).is(':nth-child(11)') || $(li).is(':nth-child(16)') || $(li).is(':nth-child(21)')) {
                left += padding * 4
            } else if ($(li).is(':nth-child(2)') || $(li).is(':nth-child(7)') || $(li).is(':nth-child(12)') || $(li).is(':nth-child(17)') || $(li).is(':nth-child(22)')) {
                left += padding * 3
            } else if ($(li).is(':nth-child(3)') || $(li).is(':nth-child(8)') || $(li).is(':nth-child(13)') || $(li).is(':nth-child(18)') || $(li).is(':nth-child(23)')) {
                left += padding * 2
            } else if ($(li).is(':nth-child(4)') || $(li).is(':nth-child(9)') || $(li).is(':nth-child(14)') || $(li).is(':nth-child(19)') || $(li).is(':nth-child(24)')) {
                left += padding
            }

        } else if ( $('html').attr('lang') === 'en' && $(el).children('.sub-nav-wrapper').hasClass('wide-lg') ) {
            const li = $(el).children('.sub-nav-wrapper').find('.sub-nav-wrapper').first('.sub-nav-wrapper').parent('li')
            const padding = 30.56
            left -= $(li).position().left + $(li).innerWidth()
            if ($(li).is(':nth-child(2)') || $(li).is(':nth-child(7)') || $(li).is(':nth-child(12)') || $(li).is(':nth-child(17)') || $(li).is(':nth-child(22)')) {
                left -= padding
            } else if ($(li).is(':nth-child(3)') || $(li).is(':nth-child(8)') || $(li).is(':nth-child(13)') || $(li).is(':nth-child(18)') || $(li).is(':nth-child(23)')) {
                left -= padding * 2
            } else if ($(li).is(':nth-child(4)') || $(li).is(':nth-child(9)') || $(li).is(':nth-child(14)') || $(li).is(':nth-child(19)') || $(li).is(':nth-child(24)')) {
                left -= padding * 3
            } else if ($(li).is(':nth-child(5)') || $(li).is(':nth-child(10)') || $(li).is(':nth-child(15)') || $(li).is(':nth-child(20)') || $(li).is(':last-child')) {
                left -= padding * 4
            }
        }
        $(el).attr('al',left)
    } else {
        let left = Number($(el).parents('.main-nav__item').attr('al'))
        let wrapperWidth = $(el).children('.sub-nav-wrapper').innerWidth()
        if ( ($(el).innerWidth()+$(el).position().left) !==  $(el).parents('.sub-nav-wrapper').innerWidth() && (!$(el).parents('.wide-lg').length) ) {
            if ( $('html').attr('lang') === 'en' ) {
                wrapperWidth = $(el).innerWidth() + $(el).position().left + ($(el).children('.sub-nav-wrapper').innerWidth()*2) - $(el).parents('.sub-nav-wrapper').innerWidth()
            } else {
                wrapperWidth = $(el).children('.sub-nav-wrapper').innerWidth() - $(el).position().left
            }
        }
        left -= wrapperWidth
        if ( left < 0 && $('html').attr('lang') !== 'en' ) {
            $(el).children('.sub-nav-wrapper').css({
                'right': '-100%',
                'top': '0',
            })
        } else if ( left < 0 && $('html').attr('lang') === 'en' ) {
            $(el).children('.sub-nav-wrapper').css({
                'left': '-100%',
                'top': '0'
            })
        }
        $(el).parents('.main-nav__item').attr('al',left)
    }
}