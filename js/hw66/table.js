let i = 0;
(function () {
    'use strict';

    const lorem = document.getElementById('lorem');
    const colors = ['violet', 'orange', 'yellow', 'green', 'lightBlue'];
    const textColors = ['black', 'white', 'purple', 'pink', 'grey'];

    /*setColors(color, backGoundColor) {
        setCss()
        setCss()
    }*/

    function changeColor() {
        const changedBackgroundColor = colors[i];
        const changedTextColor = textColors[i];
        lorem.style.backgroundColor = changedBackgroundColor;
        lorem.style.color = changedTextColor;
        i = i === colors.length - 1 ? 0 : i + 1;
        const colorTable = document.getElementById('colorTable');
        const row = colorTable.insertRow();
        const backgroundColor = row.insertCell();
        const textColor = row.insertCell();
        const time = row.insertCell();

        backgroundColor.innerText = changedBackgroundColor;
        textColor.innerText = changedTextColor;
        time.innerText = new Date().toLocaleTimeString();

        addEventListener(row, 'click', () => {
            //stopColors();
            //setColors(color, backgroundColor);
        });

    }

    let theIntervalId;
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', () => {
        if (!theIntervalId) {
            theIntervalId = setInterval(changeColor, 1000);
            startButton.innerText = 'Stop';
        } else {
            clearInterval(theIntervalId);
            theIntervalId = undefined;
            startButton.innerText = 'Start';
        }
    });


}());