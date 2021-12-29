import { snake_size } from "./constant.js";
import { canvas } from './index.js';
import { appleImg } from "./index.js";
import { context } from "./index.js";
export default class Apple {
    constructor() {
        this.move();
    }
    draw(context, appleImg) {
        context.drawImage(appleImg, this.x, this.y, snake_size, snake_size);
    }
    move() {
        console.log(canvas.height);
        console.log(canvas.width);
        this.y = this.getRandomNumber(0, canvas.height - 1);
        this.x = this.getRandomNumber(0, canvas.width - 1);

        this.draw(context, appleImg);
    }
    getRandomNumber(min, max) {
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        r = r - r % snake_size;
        return r;
    }

}