window.myApp = window.myApp || {};
window.myApp.counters = (function (myModule) {
    'use strict';
    let countersCreated = 0;
    
    //myModule.incrementCounter = (counter) => counter+1;
    myModule.inc = (function incrementCounter() {
        this.counter++;
    });
    
    myModule.create= (function createCounter(name) {
        countersCreated++;
        return{
            name, 
            counter: 0
        };
    });
    //myModule.createCount = () => createCounter();
    //myModule.createCounter = (name) => (name, counter: 0, counterCreate: counterCreated+1);
    
    const x = myModule.create('x');
    const y = myModule.create('y');
    
    //incrementCounter.call(x);
    //incrementCounter.call(y);
    myModule.inc.call(x);
    myModule.inc.call(y);
    myModule.inc.call(x);
    myModule.inc.call(x);
    myModule.inc.call(x);
    myModule.inc.call(y);
    /*myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);
    myModule.incrementCounter.call(y);*/

    
    console.log(x, y);
    console.log('counters created', countersCreated);

    return myModule;

}(window.myApp.counters || {}));

