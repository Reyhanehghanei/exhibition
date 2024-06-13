export function language() {
    /* ------------------ multi lang toggle ---------------------- */
// initialize local storage for the first time
    if (localStorage.getItem("lang") == null) {
        localStorage.setItem("lang", "fa");
    }
// set the page lang
    let langSet = localStorage.getItem("lang");

//  adding related ID to the flags element
    $('.flag').each(function (index) {
        // let text = $(this).attr("id")
        // console.log(text)
        // console.log($(this).attr('id', text))
    })
// set selected lang on reload page
    if (langSet == 'fa' ||  langSet == 'ar') {
        $('body').css('font-family' , 'iranyekan')

        $('.flag[id="FA"]').addClass('active')

        $('html').attr('lang', langSet).attr('dir', 'rtl')

        $('link[href^="assets/styles/common"]').attr('href', 'assets/styles/common.css')



        if ($('link[href^="assets/styles/index"]').length) {

            $('link[href^="assets/styles/index"]').attr('href', 'assets/styles/index.css')

        }
        else if ($('link[href^="assets/styles/general-login]').length) {
            $('link[href^="assets/styles/general-login"]').attr('href', 'assets/styles/general-login.css')

        }
            // else if ($('link[href^="css/product-det"]').length) {
        //
        //     $('link[href^="css/product-det"]').attr('href', 'css/product-detail.css')
        //
        // } else if ($('link[href^="css/video-arc"]').length) {
        //
        //     $('link[href^="css/video-arc"]').attr('href', 'css/video-archive.css')
        //
        // }
    } else {
        $('body').css('font-family' , 'iranyekan-en')

        $('.flag[id="EN"]').addClass('active')

        $('html').attr('lang', 'en').attr('dir', 'ltr')

        $('link[href^="assets/styles/common"]').attr('href', 'assets/styles/common-en.css')



        if ($('link[href^="assets/styles/index"]').length) {

            $('link[href^="assets/styles/index"]').attr('href', 'assets/styles/index-en.css')

        }

        else if ($('link[href^="assets/styles/product-detail"]').length) {

            $('link[href^="assets/styles/product-detail"]').attr('href', 'assets/styles/product-detail-en.css')

        }
        else if ($('link[href^="assets/styles/pages"]').length) {

            $('link[href^="assets/styles/pages"]').attr('href', 'assets/styles/pages-en.css')

        }


    }


    $('.flag').click(function () {
        let lang = $(this).attr("id")
        console.log({lang})
        if (lang == 'FA' || lang == 'AR') {
            let pLang = 'fa'
            localStorage.setItem("lang", pLang);
            $(this).addClass('active')
            location.reload();
        } else {
            let pLang = 'en'
            localStorage.setItem("lang", pLang);
            $(this).addClass('active')
            location.reload();
        }
    });
}
/* ---------------------------------------------------------------------------------------- */
