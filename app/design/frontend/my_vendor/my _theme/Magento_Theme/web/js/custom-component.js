define(["jquery", "uiComponent", "ko"], function ($, Component, ko) {
    "use strict";
    return Component.extend({
        default: function () {
            var data = [
                {
                    product_image: "product_01.jpg",
                    product_name: "Sữa Dưỡng Phục Hồi Tái Tạo Da B5 Neogence 50ml",
                    price: "399,500 d",
                },
                {
                    product_image: "product_01.jpg",
                    product_name: "Sữa Dưỡng Phục Hồi Tái Tạo Da B5 Neogence 50ml",
                    price: "399,500 d",
                },
                {
                    product_image: "product_01.jpg",
                    product_name: "Sữa Dưỡng Phục Hồi Tái Tạo Da B5 Neogence 50ml",
                    price: "399,500 d",
                },
                {
                    product_image: "product_01.jpg",
                    product_name: "Sữa Dưỡng Phục Hồi Tái Tạo Da B5 Neogence 50ml",
                    price: "399,500 d",
                },
                {
                    product_image: "product_01.jpg",
                    product_name: "Sữa Dưỡng Phục Hồi Tái Tạo Da B5 Neogence 50ml",
                    price: "399,500 d",
                },
            ];
        },

        initialize: function () {
            this._super();
            
            console.log(this.data);
        },
    });
});
