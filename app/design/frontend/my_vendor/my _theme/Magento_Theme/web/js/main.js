
require(['jquery', 'slick'], function ($) {
    $(document).ready(function () {
        $('.bigbanner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true, // Hiển thị nút next và prev
        });
    });
});

require(['jquery', 'slick'], function ($) {
    $(document).ready(function () {
        $('.dealsofdaywrapper').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true, // Hiển thị nút next và prev
        });
    });
});





