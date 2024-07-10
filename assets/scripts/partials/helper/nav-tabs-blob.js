export function navTabsBlob() {
    if ( $('.nav-tabs').length ) {
        const elements = document.querySelectorAll('.nav-tabs')
        
        for (const element of elements) {
            const scrollWidth = element.scrollWidth
            const width = element.clientWidth
            
            $(window).on('load', function () {
                
                // show tab on page load and after each click
                const hash = location.hash.split('&');
                if ( hash && hash.length === 2 ) {
                    $(element).find(`.nav-link[data-bs-target='${hash[0]}']`).tab('show')
                    // $(`.nav-tabs .nav-link[data-bs-target='${hash[1]}']`).css('border', '1px solid red')
                    $(`.cart-way-list .cart-way-list__link[data-bs-target="${hash[1]}"]`).tab('show')
                }  else if ( hash && hash.length === 1 ) {
                    $(`.nav .nav-link[data-bs-target='${hash}']`).tab('show')
                }
                // Change hash for page-reload
                // $('.nav-tabs a').on('shown.bs.tab', function (e) {
                //     window.location.hash = $(e.target).data('bs-target');
                // })
            })
            
            if ( scrollWidth === width ) {
                let activeLeft = $(element).find('.nav-link.active').position().left
                let activeWidth = $(element).find('.nav-link.active').innerWidth()
                
                if ( $(element).parents('.modal').length ) {
                    const modalId = $(element).parents('.modal').attr('id')
                    $(`#${modalId}`).on("shown.bs.modal", function () {
                        activeLeft = $(element).find('.nav-link.active').position().left
                        activeWidth = $(element).find('.nav-link.active').innerWidth()
                        $(element).find('.blob').css({
                            'left': activeLeft - ( plus / 2 ),
                            'width': activeWidth + plus
                        })
                    })
                }
                const plus = 10
                $(element).find('.blob').css({
                    'left': activeLeft - ( plus / 2 ),
                    'width': activeWidth + plus
                })
                $(element).find('.nav-link').on('shown.bs.tab', function (e) {
                    const target = $(e.target).data('bs-target');
                    const left = $(element).find(`.nav-link[data-bs-target='${target}']`).position().left
                    const width = $(element).find(`.nav-link[data-bs-target='${target}']`).innerWidth()
                    $(element).find('.blob').css({
                        'left': left - ( plus / 2 ),
                        'width': width + plus
                    })
                })
            } else {
                $(element).addClass('mobile')
            }
            
        }
    }
}