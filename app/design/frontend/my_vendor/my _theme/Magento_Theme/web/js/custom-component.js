define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
    'use strict';
    return Component.extend({
        initialize: function () {
            this._super();
            this.todoList = ko.observableArray([
                // {name: "Todo1"},
                // {name: "Todo2"},
                // {name: "Todo3"},
            ]);
            this.message_error = ko.observable('');
        },
        addNewTodoList: function () {
            var newTodo = $('#todoValue').val();
            if(newTodo != ''){
                this.todoList.push({name: newTodo});
                $('.message_error').hide();
                console.log("true");
            }else{
                $('.message_error').show();
                this.message_error('Vui lòng nhập công việc');
                console.log("false");

            }
        }


    })

});
