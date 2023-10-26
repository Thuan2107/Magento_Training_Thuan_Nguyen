require([
    'jquery',
    'tabs'], function ($) {
    $(".product.data.items").tabs({
        "openedState": "active",
        "animate": {
            "duration": 100
        },
        "active": 1, 
        "disabled": [2], 
        "disabledState": "disabled"
    });
});