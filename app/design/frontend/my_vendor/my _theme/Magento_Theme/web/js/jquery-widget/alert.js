require([
    'jquery',
    'Magento_Ui/js/modal/alert'
], function ($) {
    'use strict';

    $('#btn-click').on('click', function(){
        $('.alert-modal-content').alert({
            title: 'Alert Title',
            modalClass: 'alert',
            actions: {
                always: function() {
                    // do something when the modal is closed
                }
            },
            buttons: [{
                text: $.mage.__('Accept'),
                class: 'action primary accept',
    
                click: function () {
                    this.closeModal(true);
                }
            }, {
                text: $.mage.__('New Action'),
                class: 'action',
                click: function () {
                    // New action
                }
            }]
        });
    })
});