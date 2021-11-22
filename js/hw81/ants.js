(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const bread = $('#bittenBread');
    const macoroni = $('#macoroni');
    const cherrio = $('#cherrio');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        constructor(color) {
            this.color = color;
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.setRandomDirection();
            this.draws = 0;
        }
        setRandomDirection() {
            this.numberOfTimes = Math.floor(Math.random() * 150);
            this.dx = Math.random() * 2 - 1;
            this.dy = Math.random() * 2 - 1;
        }
        draw() {
            if (this.draws === this.numberOfTimes) {
                this.setRandomDirection();
                this.draws = 0;
            }
            this.x += this.dx;
            this.y += this.dy;

            if (this.y < 0) {
                //this.x = this.width;
                this.y = canvas.height;
            } else if (this.y > canvas.height) {
                this.y = 0;
            }
            if (this.x < 0) {
                this.x = canvas.width;
            } else if (this.x > canvas.width) {
                this.x = 0;
            }
            context.fillStyle = this.color;
            context.beginPath();
            context.fillRect(this.x, this.y, 6, 6);
            context.fill();
            this.draws++;
        }
    }
    const ants = [];
    ants.push(new Ant('black'));
    //bread.css.left('20px');

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.draw());
    }, 150);

    const antColorInput = document.getElementById('color');
    const antAmountInput = document.getElementById('amount');
    document.getElementById('addAnt').addEventListener('submit', e => {
        e.preventDefault();
        for (let index = 0; index < antAmountInput.value; index++) {
            ants.push(new Ant(antColorInput.value));
        }
    });
}());