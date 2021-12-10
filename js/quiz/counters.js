window.myApp = window.myApp || {};
window.myApp.counters = (function (myModule) {
    'use strict';

    // SL - why no for loops?
    myModule.counter1.increment();
    myModule.counter1.getCounter();
    myModule.counter1.increment();
    myModule.counter1.getCounter();
    myModule.counter1.increment();
    myModule.counter1.getCounter();
    myModule.counter1.increment();
    myModule.counter1.getCounter();
    myModule.counter1.increment();
    myModule.counter1.getCounter();
    myModule.counter1.increment();
    myModule.counter1.getCounter();
    myModule.counter1.increment();
    myModule.counter1.getCounter();
    myModule.counter1.increment();
    myModule.counter1.getCounter();
    myModule.counter1.increment();
    myModule.counter1.getCounter();
    myModule.counter1.increment();
    myModule.counter1.getCounter();

    const t = myModule.create('t');
    myModule.inc.call(t);
    myModule.inc.call(t);
    myModule.inc.call(t);
    myModule.inc.call(t);
    myModule.inc.call(t);
    const g = myModule.create('g');
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);
    myModule.inc.call(g);


    myModule.counter1.getCounter();
    console.log(t, g);

    return myModule;
}(window.myApp.counters || {}));
