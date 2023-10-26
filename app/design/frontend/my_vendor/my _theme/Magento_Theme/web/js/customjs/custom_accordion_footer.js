require([
    'jquery',
    'accordion'], function ($) {
    $("#footer_wrap").accordion({
        "collapsible": true, //Có thể thu gọn
        "active": [0, 1, 2], //Xác định tab nào đang active khi chạy lần đầu, mặc định là [0].
        "multipleCollapsible": true //Xác định xem có thể mở rộng nhiều tab cùng lúc, mặc định là false
    });
});