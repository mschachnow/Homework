(function () {
    'use strict';

    class Vehicle {

        constructor(color) {
            this.color = color;
        }
        print() {
            console.log(`color: ${this.color}, speed: ${this.speed}`);

        }
        go(speed) {
            this.speed = speed;
            console.log(`now going at a speed of ${this.speed}`);
        }
    }
    const ioniq = new Vehicle('white');

    ioniq.go(80);
    console.log(ioniq.speed);
    ioniq.print();
    console.log(ioniq);

    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }
        go(speed) {
            this.speed = speed;
            console.log(`now flying at a speed of ${this.speed}`);
        }
    }
    const passengerPlane = new Plane('black');
    passengerPlane.go('7000mph');
    passengerPlane.print();
    console.log(passengerPlane);


}());