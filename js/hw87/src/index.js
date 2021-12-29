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
//import { score } from './snake.js';


export const canvas = document.getElementById('theCanvas');
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
function get score(){
    return score;
}
function set score(){

}

let snake;
// eslint-disable-next-line no-unused-vars
let apple;

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = 'bold 30px Arial';
    context.fillText(`score: ${score}`, canvas.width - 160, 40);
    console.log(score);
    snake.move();
    apple.draw();

    if (!gameover) {
        setTimeout(gameLoop, speed);
    }
}
const theButton = document.getElementById('playAgain');
theButton.addEventListener('click', playGame, gameLoop);

const snakeHeadImg = new Image();
snakeHeadImg.src = snakeHead;
playGame();
function playGame() {
    snakeHeadImg.onload = () => {

        setTimeout(gameLoop, speed);
    };
}
function gameOverCb() {
    gameover = true;
    console.log(gameover);
    context.font = 'bold 50px Arial';
    context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
    crashSound.currentTime = 0; //in this case it was playing
    crashSound.play();
}
const appleImg = new Image();
appleImg.src = redapple;

function waitForImagesToLoad(img) {
    return new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject();
    });
}
Promise.all([waitForImagesToLoad(snakeHeadImg), waitForImagesToLoad(appleImg)])
    .then(() => {
        apple = new Apple();
        snake = new Snake(canvas, snakeHeadImg, apple, gameOverCb);
    })
//}());




