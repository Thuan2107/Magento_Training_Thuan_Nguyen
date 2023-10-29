define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
    'use strict';
    var self;
    return Component.extend({
        myTimer: ko.observable(0),
        red: ko.observable(0),
        blue: ko.observable(0),
        green: ko.observable(0),
        initialize: function () {
            self = this;
            this._super();
            this.incrementTime();
            this.subscribeToTime();
            this.randomColour = ko.computed(function() {
                return 'rgb(' + this.red() + ', ' + this.blue() + ', ' + this.green() + ')';
            }, this);
        },
        incrementTime: function() {
            var t = 0;
            setInterval(function() {
                t++;
                self.myTimer(t);
            }, 1000);
        },
        subscribeToTime: function() {
            this.myTimer.subscribe(function(newValue) {
                console.log(newValue);
                self.updateTimerTextColour();
            });
        },
        randomNumber: function() {
            return Math.floor((Math.random() * 255) + 1);
        },
        updateTimerTextColour: function() {
            this.red(self.randomNumber());
            this.blue(self.randomNumber());
            this.green(self.randomNumber());
        }
    });
});