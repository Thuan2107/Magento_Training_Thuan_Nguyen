define([
    'jquery',
    'slick',
    'testlog',
    'testlogpath',
    'accordion_widget',
    'alert_widget',
    'tabs_widget',
    'custom_accordion_footer'
], function($) {
    'use strict';
    $('.product_list_wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true, 
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }

            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    $('.bigbanner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true, 
    });
    $('.news_wrapper_item').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true, 
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }

        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});
});