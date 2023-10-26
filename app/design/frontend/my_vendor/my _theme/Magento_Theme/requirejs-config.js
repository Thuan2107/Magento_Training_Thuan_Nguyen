var config = {
    map: {
        "*": { 
            testlog: "Magento_Theme/js/testlog",
            accordion_widget: "Magento_Theme/js/jquery-widget/accordion",
            alert_widget: "Magento_Theme/js/jquery-widget/alert",
            tabs_widget: "Magento_Theme/js/jquery-widget/tabs",
            custom_accordion_footer: "Magento_Theme/js/customjs/custom_accordion_footer",
        },
    },
    paths: {
        testlogpath: 'Magento_Theme/js/testlogpath'
    },
    // deps: ["js/dep"],
    // shim: {
    //     slickcustom2: {
    //         deps: ['jquery']
    //     }},
    config: {
        // mixins: {
        //     'Vendor_Module/js/module': {
        //         'Vendor_Module/js/module-mixin': true
        //     }
        // },
        text: {
            'headers': {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }
   }