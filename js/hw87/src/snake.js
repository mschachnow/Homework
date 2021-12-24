import { snake_size } from './constant.js';
let snakeBody = [];
export default class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = 'ArrowRight';
        document.addEventListener('keydown', event => {
            console.log(event.key);
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    this.direction = event.key;
            }
        });
        this.draw();
    }
    draw() {
        context.drawImage(snakeHeadImg, this.x, this.y, snake_size, snake_size);
        snakeBody.forEach(part => {
            context.fillStyle = 'green';
            context.fillRect(part.x, part.y, 60, 60);
        });

        //draw body
    }
    move() {
        let x = this.x;
        let y = this.y;
        switch (this.direction) {
            case 'ArrowRight':
                x += snake_size;
                break;
            case 'ArrowLeft':
                x -= snake_size;
                break;
            case 'ArrowUp':
                y -= snake_size;
                break;
            case 'ArrowDown':
                y += snake_size;
                break;
        }

        if (x < 0 || x > canvas.width - snake_size || y < 0 || y > canvas.height - snake_size) {
            gameover = true;
        } else {
            if (snakeBody.length) {
                snakeBody.pop();
                snakeBody.unshift({ x: this.x, y: this.y });
            }
            this.x = x;
            this.y = y;
        }
        if (this.x === apple.x && this.y === apple.y) {
            score++;
            speed = speed * 0.9;
            crunchSound.currentTime = 0;
            crunchSound.play();
            snakeBody.push({});
            apple.move();

        }
        this.draw();
    }
}