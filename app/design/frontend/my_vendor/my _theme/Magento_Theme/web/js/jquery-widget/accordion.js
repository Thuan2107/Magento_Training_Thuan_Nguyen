require([
    'jquery',
    'accordion'], function ($) {
    $("#accordion").accordion({
        "active": [1, 2], //Xác định tab nào đang active khi chạy lần đầu, mặc định là [0].
        "collapsible": true, //Có thể thu gọn
        "multipleCollapsible": true //Xác định xem có thể mở rộng nhiều tab cùng lúc, mặc định là false
    });
});