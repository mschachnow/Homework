window.myApp = window.myApp || {};
window.myApp.counters = (function (myModule) {
    'use strict';
    myModule.countersCreated = 0;
    myModule.inc = (function incrementCounter() {
        this.counter++;
    });
    
    myModule.create= (function createCounter(name) {
        myModule.countersCreated++;
        return{
            name, 
            counter: 0
        };
    });
    //counters created and incremented from this module
    //myModule.createCount = () => createCounter();
    //myModule.createCounter = (name) => (name, counter: 0, counterCreate: counterCreated+1);
    
    /*const x = myModule.create('x');
    const y = myModule.create('y');
    
    //incrementCounter.call(x);
    //incrementCounter.call(y);
    myModule.inc.call(x);
    myModule.inc.call(y);*/
    //console.log(x, y);
    myModule.printCount = (function printCount() {
        console.log('counters created', myModule.countersCreated);
    });
    return myModule;

}(window.myApp.counters || {}));

