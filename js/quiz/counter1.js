window.myApp = window.myApp || {};
window.myApp.counters = (function (myModule) {
    'use strict';

    myModule.counter1 = {
        counter: 0,
        increment: function () {
            this.counter++;
        },
        getCounter: function () {
            console.log(this.counter);
        }
    };
    
    //counter used(incremented and retrieved) in this module
    /*myModule.counter1.increment();
    myModule.counter1.getCounter();*/
    return myModule;
    
}(window.myApp.counter1 || {}));

