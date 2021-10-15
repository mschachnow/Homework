(function () {
    'use strict';

    const theNameInput = $('#name');
    const theAddressInput = $('#address');
    const theNameResult = $('#nameResult');
    const theAddressResult = $('#addressResult');

    $('#theForm').submit(e => {
        e.preventDefault();
        theNameResult.text(theNameInput.val());
        theAddressResult.text(theAddressInput.val());
    });
    const theAgreeCheckbox = $('#agree');

    $('#agree').change(function () {
        console.log(this.prop('checked'));
        $('#theForm button').prop('disabled', false);
    });

    /*$('input').click(() => {
        console.log('input clicked #1');
    });

    $('input').click(() => {
        console.log('button clicked');
    });*/
})