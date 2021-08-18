(function () {
    'use strict' ;

    function performTransaction (amount){
        this.balance += amount;
    }

    const bank1 = {
        balance: 0
        
    }

    const bank2 = {
        balance: 0
    }

    performTransaction.call(bank1,-30);
    console.log(bank1.balance);

    performTransaction.call(bank2,120);
    console.log(bank2.balance);

}());
