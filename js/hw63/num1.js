(function () {
    'use strict' ;

    const bank1 = {
        balance: 0,
        
        performTransaction: function (amount) {
            this.balance += amount;
           
        }
    }
    const bank2 = {
        balance: 0,

        performTransaction: function (amount) {
            this.balance += amount;
           
        }
    }

    bank1.performTransaction(30);
    console.log(bank1.balance);

    bank2.performTransaction(120);
    console.log(bank2.balance);

}());
