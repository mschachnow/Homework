(async function () {
    'use strict';
    const countrySelect = $('#countrySelected');
    //let currency = await fetchInfo(`https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=18119a5a0b863b436f7d`);
    //console.log(currency);

    async function fetchInfo(url) {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
        return results;
    }
    let results = ["hello", "why"];
    let country = [];
    country = await fetchInfo([`https://free.currconv.com/api/v7/countries?apiKey=18119a5a0b863b436f7d`]);
    console.log(country);
    if (country) {
        results.map(countryListed => {
            countryListed = [];
            console.log(countryListed)

            countryListed.forEach(eachCountry => {
                //eachCountry = ["Hi"];
                console.log(eachCountry);
                countrySelect.append(`<option value="${eachCountry.name}">${eachCountry.name}</option>`);
            });
        });
        //console.log(eachCountry);
    }
    //let currency = await fetchInfo(`https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=18119a5a0b863b436f7d`);

}());