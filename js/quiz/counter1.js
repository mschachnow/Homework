window.myApp = window.myApp || {};
window.myApp.counters = (function (myModule) {
    'use strict';

    const counter1 = {
        counter: 0,
        increment: function () {
            this.counter++;
        },
        getCounter: function () {
            console.log(this.counter);
        }
    }; 
    myModule.getCounter1 = () => counter1;
   
    /*counter1.increment();
    counter1.getCounter();
    counter1.increment();
    counter1.getCounter();
    counter1.increment();
    counter1.getCounter();
    counter1.increment();
    counter1.getCounter();
    counter1.increment();
    counter1.getCounter();
    counter1.increment();
    counter1.getCounter();
    counter1.increment();
    counter1.getCounter();
    counter1.increment();
    counter1.getCounter();
    counter1.increment();
    counter1.getCounter();
    counter1.increment();
    counter1.getCounter();*/

    return myModule;
    
}(window.myApp.counter1 || {}));

