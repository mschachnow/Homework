(function () {
    'use strict';

    const thePopUp = get('popUp');
    const theMessage = get('myMessage');

    function show(message) {
        theMessage.innerText = message;
        thePopUp.style.display = 'block';
    }
  

    function get(id) {
        return document.getElementById(id);
    }
    
    get('alert').addEventListener('click', () => {
        show('This is a test of the emergency broadcast system');
    });

    get('insertMessage').addEventListener('click', (event) => {
        event.preventDefault();
        show(get('input').value);
    });

    get('okay').addEventListener('click', () => {
        thePopUp.style.display = 'none';
    });

        
}());