
require(['jquery', 'slick'], function ($) {
    $(document).ready(function () {
        $('.bigbanner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true, 
        });
    });
});

require(['jquery', 'slick'], function ($) {
    $(document).ready(function () {
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
    });
});


require(['jquery', 'slick'], function ($) {
    $(document).ready(function () {
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
});





