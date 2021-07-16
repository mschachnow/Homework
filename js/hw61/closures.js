'use strict';

function multiply(num1, num2) {
    return num1*num2;
}
console.log(multiply(2, 3));

function getMultiplier() {
    return function (num1, num2) {
        return num1 * num2;
    };
}

function getMultiplier2(num1) {
    return function (num2) {
        return num1 * num2;
    }
}

let multiplier = getMultiplier();
console.log(multiplier(4, 5));

var multiplyBySix = getMultiplier2(6);
console.log(multiplyBySix(3));
