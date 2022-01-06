(async function () {
    'use strict';

    async function fetchInfo(info) {
        const response = await fetch(info);
        const data = await response;
        console.log(data);
        return data;
    }

    const country = await fetchInfo(`https://free.currconv.com/api/v7/countries?apiKey=18119a5a0b863b436f7d`);
    console.log(country);

    const currency = await fetchInfo(`https://free.currconv.com/api/v7/convert?q=XCD_ALL&compact=ultra&apiKey=18119a5a0b863b436f7d`);

}());