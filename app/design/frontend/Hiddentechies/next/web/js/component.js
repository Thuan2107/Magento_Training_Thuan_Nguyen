require([
    'mage/apply/main'
], function(main) {
    main.applyFor(
        '*',
        {fruitName: 'Apple'},
        'Hiddentechies_Next/js/component'
    );
});

define([
], function() {
    return function(config, element) {
        // Access the config option
        var fruitName = config.fruitName;
        console.log(fruitName);

        // element will be null as we set '*' as element selector
        // If we set an element selector, element would be that element

        // We return a public object
        // You can add public methods and variables here
        return {};
    };
});
