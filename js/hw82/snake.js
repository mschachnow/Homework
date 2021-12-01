(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const snake_size = 64;

    function resizeCanvas() {
        canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % snake_size);
        canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % snake_size);

    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const crashSound = document.getElementById('crash');
    const crunchSound = document.getElementById('crunch');

    let score = 0;
    let gameover = false;
    let speed = 500;
    let snakeBody = [];

    class Snake {
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
            context.drawImage(snakeHead, this.x, this.y, snake_size, snake_size);
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

    class Apple {
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

    const snakeHead = new Image();
    snakeHead.src = 'images/snakehead.png';
    playGame();
    function playGame() {

        snakeHead.onload = () => {
            snake = new Snake();
            setTimeout(gameLoop, speed);
        };
    }
    const appleImg = new Image();
    appleImg.src = 'images/redapple.png';
    appleImg.onload = () => {
        apple = new Apple();
    };


}());




