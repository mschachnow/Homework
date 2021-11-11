(function () {
    'use strict';


    //vehicle constructor
    function Vehicles(color) {
        this.color = color;
        this.speed = 0;

    }

    Vehicles.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now going at a speed of ${this.speed}`);
    };

    Vehicles.prototype.print = function () {
        console.log(`color: ${this.color}, speed: ${this.speed}`);
    };

    //creating instance of vehicle
    const car = new Vehicles('white', '80MPH');
    console.log(car);
    car.go('800mph');
    car.print();


    Plane.prototype = Object.create(Vehicles.prototype);

    //Plane has a prototype of vehicle, creating a plane constructor
    function Plane(color, speed) {
        Vehicles.call(this, color, speed);
    }

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now Flying at a speed of ${this.speed}`);
    };

    //creating instance of Plane
    const jet = new Plane('blue', '8000MPH');
    console.log(jet);
    jet.print();
    jet.go('9000mph');
    jet.print();

}());