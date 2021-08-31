window.myApp = window.myApp || {};
window.myApp.counters = (function (myModule) {
    'use strict';
    
    //myModule.getCounter1(increment, getCounter);
    //getCounter.increment();
    //getCounter.getCounter();
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

    console.log(t, g);
    
    return myModule;
}(window.myApp.counters || {}));
