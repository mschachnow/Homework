'use strict'; 
 
 let letters = ['A', 'b', 'C', 'd', 'E', 'F'];

/*function upperCase(l) {
    if (l === l.toUpperCase()) {
       return true
    } 
    return false;
}

function lowerCase(l) {
    if (l === l.toLowerCase()) {
        return true;
    }
    return false;
}*/

let upperCase = (l) => l === l.toUpperCase();
let lowerCase = (l) => l === l.toLowerCase();
   

function every(theArray, test) {
    for (let i=0; i < theArray.length; i++) {
        if (!test(theArray[i])) {
            return false;
        }
    }
    return true;
}

console.log(every(letters, (l) => l === l.toUpperCase()));
console.log(every(letters, (l) => l === l.toLowerCase()));
console.log('testing built in every', letters.every(val => upperCase(val)));



function mySome(theArray, test) {
    for (let i=0; i < theArray.length; i++) {
        if (test(theArray[i])) {
            return true;
        }
    }
    return false;
}

console.log(mySome(letters, (l) => l === l.toUpperCase()));
console.log(mySome(letters, (l) => l === l.toLowerCase()));
console.log('testing built in some', letters.some(val => upperCase(val)));



function onlyIf(anArray, test, action) {
    anArray.forEach(value => {
        if (test(value)) {
            action(value);
        }
    });
}

onlyIf(letters, upperCase, (l) => console.log(l));
onlyIf(letters, lowerCase, (l) => console.log(l));

let filtered = letters.filter(val => upperCase(val));
filtered.forEach(val => console.log(val));





