window.myApp = window.myApp || {};
window.myApp.counters = (function (myModule) {
    'use strict';

    myModule.counter1 = {
        counter: 0, // SL - this is not as private as it could be.Can still be changed from outside by doing counter1.counter = ... better would be to move this out of object and into function - then closures can still use it - but nobody else can get at it.
        increment: function () {
            this.counter++;
        },
        getCounter: function () {
            console.log(this.counter); // SL - this should be returning the count, not console logging it. Who says caller wants to do that? They just want the count
        }
    };

    //counter used(incremented and retrieved) in this module
    /*myModule.counter1.increment();
    myModule.counter1.getCounter();*/
    return myModule;

}(window.myApp.counter1 || {}));

