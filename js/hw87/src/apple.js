import { snake_size } from "./constant.js";
export default class Apple {
    constructor() {
        this.move();
    }
    draw() {
        context.drawImage(appleImg, this.x, this.y, snake_size, snake_size);
    }
    move() {
        this.x = this.getRandomNumber(0, canvas.width - 1);
        this.y = this.getRandomNumber(0, canvas.height - 1);
        this.draw();
    }
    getRandomNumber(min, max) {
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        r = r - r % snake_size;
        return r;
    }

}