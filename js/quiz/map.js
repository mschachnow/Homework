(function () {
    'use strict';
    const num = [2, 3, 5, 6, 8, 9];
    function myMap(num, myMapFunction) {
        const newArray = [];
        for(let i=0; i<num.length; i++){
            const newLoop = myMapFunction(num[i], i, num);
            newArray.push(newLoop); 
        }
        return newArray;
    } 

    const newNumArr = myMap(num, num => num * 2);
    console.log(newNumArr);
}());
