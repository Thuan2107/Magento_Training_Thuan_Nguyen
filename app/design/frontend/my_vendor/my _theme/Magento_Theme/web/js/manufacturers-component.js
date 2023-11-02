define(["jquery", "uiComponent", "ko","mage/translate","slick"], function ($, Component, ko, $t) {
    "use strict";
    return Component.extend({
        
        initialize: function () {
            this._super();

            var jsonData = [
                {
                    "product_image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgiyghwh3v561d_tn",
                    "product_name":$t('Genuine Nike unisex umbrella jacket with sun protection and wind protection'),
                    "old_price": "310,000",
                    "new_price": "154,000"
                },
                {
                    "product_image": "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li16nxfopz0leb",
                    "product_name": $t("Sporty Jacket Symbolic parachute jacket"),         
                    "old_price": "300,000",
                    "new_price": "172,000"
                },
                {
                    "product_image": "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkjg1i0yo8oa05",
                    "product_name": $t("High quality Nike parachute jacket for men and women, unisex style GZ288"),
                    "old_price": "350,000",
                    "new_price": "178,000"
                },
                {
                    "product_image": "https://down-vn.img.susercontent.com/file/sg-11134201-22110-s5yroiack8jv9f",
                    "product_name": $t("High-quality, thick NIKE windbreaker COOL STORE 703"),
                    "old_price": "300,000",
                    "new_price": "163,000"
                },
                {
                    "product_image": "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm1vnh612fa730",
                    "product_name": $t("High-quality men's and women's wind jackets, high-quality waterproof, windproof, dust-resistant, and sun-protective."),
                    "old_price": "280,000",
                    "new_price": "196,00"
                },
            ];
            this.product_list = ko.observableArray(ko.toJS(jsonData));
            
        },
        productSlider: function(){
            setTimeout(function(){
                $('.product_list_wrapper').not('.slick-initialized').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    arrows: true, 
                });
            })
        }
    });
});
