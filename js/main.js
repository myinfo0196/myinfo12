(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        $(window).scroll(function(){
            let pos = $(window).scrollTop();
            if(pos >=50){
                $(".header_menu").addClass("on")
            }else{
                $(".header_menu").removeClass("on")
            }
        })


        /*---------------------------------------------*
        * Carousel
        ---------------------------------------------*/
        $('#Carousel').carousel({
                interval: 5000,
                item: 4
            })
            /*------------------------*/

    });

    /*---------------------------------------------*
        * STICKY scroll
    ---------------------------------------------*/

    $.localScroll();

    /**************************/



}(jQuery));
