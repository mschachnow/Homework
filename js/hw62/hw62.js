'use script';

const DoW = (function () {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];


function getDay(index) {
    return days[index - 1];
}

function getIndex(dayOfWeek) {
    return days.findIndex(d => d.toLowerCase() === dayOfWeek.toLowerCase()) + 1;
}

return {
    getDay,
    getIndex
};

}());

console.log('DoW.getIndex(Sunday)', DoW.getIndex('Sunday'));
console.log('DoW.getDay(4)', DoW.getDay(4));

const interestCalc = (function() {
    let interestRate;
    let numOfYears;

    function setRate(rate) {
        interestRate = rate;
    }

    function setYears(years) {
        numOfYears = years;
    }
    function calculate(principal){
        return principal*(interestRate/100)*numOfYears;
    }
    
    return {
        calculate,
        setRate,
        setYears
    }

}());

interestCalc.setRate(3);
interestCalc.setYears(5);

console.log(interestCalc.calculate(20000));
