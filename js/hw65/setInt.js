let i= 0;
(function () {
    'use strict';
    
    const lorem = document.getElementById('lorem');
    const colors = ['violet', 'orange', 'yellow', 'green', 'lightBlue'];
    const textColors = ['black', 'white', 'purple', 'pink', 'grey'];

    function changeColor() {
         lorem.style.backgroundColor = colors[i];
         lorem.style.color = textColors[i];
         i = i === colors.length ? 0 : i+1;
         
    }

    let theIntervalId;
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', () => {
        if(!theIntervalId) {
            theIntervalId = setInterval(changeColor, 2000);
            startButton.innerText = 'Stop';
        } else {
            clearInterval(theIntervalId);
            theIntervalId = undefined;
            startButton.innerText = 'Start';
        }
    });
}());