//(function () {
//'use strict';
import './css/index.css';
import redapple from '../images/redapple.png';
import snakeHead from '../images/snakehead.png';

import crunch from '../media/crunch.mp3';
import crash from '../media/crash.mp3';
import Snake from './snake.js';
import Apple from './apple.js';
import { snake_size } from './constant.js';

const canvas = document.getElementById('theCanvas');
const context = canvas.getContext('2d');
//const snake_size = 64;

function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % snake_size);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % snake_size);

}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const crashSound = new Audio();
const crunchSound = new Audio();
crunchSound.src = crunch;
crashSound.src = crash;

let score = 0;
let gameover = false;
let speed = 500;

let snake;
let apple;

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = 'bold 30px Arial';
    context.fillText(`score: ${score}`, canvas.width - 160, 40);
    snake.move();
    apple.draw();

    if (!gameover) {
        setTimeout(gameLoop, speed);
    } else {
        context.font = 'bold 50px Arial';
        context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
        crashSound.currentTime = 0; //in this case it was playing
        crashSound.play();
        //setTimeout(context.clearRect(0, 0, canvas.width, canvas.height), 100);
    }
}
const theButton = document.getElementById('playAgain');
theButton.addEventListener('click', playGame, gameLoop);

const snakeHeadImg = new Image();
snakeHeadImg.src = snakeHead;
playGame();
function playGame() {
    snakeHeadImg.onload = () => {
        snake = new Snake();
        setTimeout(gameLoop, speed);
    };
}
const appleImg = new Image();
appleImg.src = redapple;
appleImg.onload = () => {
    apple = new Apple();
};
//}());




