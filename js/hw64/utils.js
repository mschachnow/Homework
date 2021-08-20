window.myApp = window.myApp || {};
window.myApp.utils = (function (theModule){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];


    theModule.getDay = (index)=> days[index-1];
    theModule.getIndex = (dayOfWeek) => days.findIndex(d => d.toLowerCase() === dayOfWeek.toLowerCase())+1;
    return theModule;

}(window.myApp.utils || {}));


 