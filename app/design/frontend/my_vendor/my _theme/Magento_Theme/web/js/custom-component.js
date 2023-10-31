define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
    'use strict';
    return Component.extend({
        initialize: function () {
            this._super();
            this.todoList = ko.observableArray([
                [
                    {
                      "product_image" : "product_01.jpg",
                      "product_name" : "S?a Du?ng Ph?c H?i Tái T?o Da B5 Neogence 50ml",
                      "price" : "399,500 d"
                    },
                    {
                      "product_image" : "product_01.jpg",
                      "product_name" : "S?a Du?ng Ph?c H?i Tái T?o Da B5 Neogence 50ml",
                      "price" : "399,500 d"
                    },
                    {
                      "product_image" : "product_01.jpg",
                      "product_name" : "S?a Du?ng Ph?c H?i Tái T?o Da B5 Neogence 50ml",
                      "price" : "399,500 d"
                    },
                    {
                      "product_image" : "product_01.jpg",
                      "product_name" : "S?a Du?ng Ph?c H?i Tái T?o Da B5 Neogence 50ml",
                      "price" : "399,500 d"
                    },
                    {
                      "product_image" : "product_01.jpg",
                      "product_name" : "S?a Du?ng Ph?c H?i Tái T?o Da B5 Neogence 50ml",
                      "price" : "399,500 d"
                    }
                  ]
            ]);
            this.message_error = ko.observable('');
        },
        addNewTodoList: function () {
            var newTodo = $('#todoValue').val();
            if(newTodo != ''){
                this.todoList.push({name: newTodo});
                $('.message_error').hide();
            }else{
                $('.message_error').show();
                this.message_error('Vui lòng nhập công việc');
            }
        }
    })
});
