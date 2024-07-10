/* -------------------------------------------- main import -------------------------------------------- */
import { mainNav } from "./partials/main-nav.js";
import { navToggle } from "./partials/nav-toggle.js";
import { searchModal } from "./partials/search-modal.js";

/* -------------------------------------------- helper import -------------------------------------------- */
import { isMobile } from "./partials/helper/mobile-check.js";
import { scrollWindow } from "./partials/helper/scroll-window.js";
import { scrollupClick } from "./partials/helper/scrollup-click.js";
import { tooltip } from "./partials/helper/tooltip.js";
import { mainHeight } from "./partials/helper/main-height.js";
import { footerInfo } from "./partials/helper/footer-info.js";
import { contactUsValidation } from "./partials/helper/contact-us-validation.js";
// import { validate } from "./partials/helper/validate.js";

// import { notLoaded } from "./partials/helper/not-loaded.js";

/* -------------------------------------------- index import -------------------------------------------- */
import {language} from "./partials/index/language.js";
import { mainSlider } from "./partials/index/main-slider.js";

/* ------------------------------------------------------------------------------------------------------ */

import { popularSlider } from "./partials/index/my-carousel.js";





let mobile = false;
$( function (){

    // main scripts
    mainNav();
    navToggle();
    searchModal();
    // owlCarousel()

    // helper scripts
    mobile = isMobile();
    scrollWindow();
    scrollupClick();
    tooltip();
    mainHeight();
    footerInfo();
    language();

    // const validationItem = contactUsValidation()
    // validate(validationItem.target, validationItem.rules, validationItem.messages)
    // navTabsBlob();
    // notLoaded();

    // index scripts

})


if ( $('#slideshow').length ) {
    mainSlider();
}


if ( $('.popularSlider').length) {
    popularSlider();
}
