'use strict';

const mm = require('./mymodule.js');
const dirName = process.argv[2];
const extensionFilter = process.argv[3];

mm(dirName, extensionFilter, function (err, list) {
    if (err) {
        return console.error('error', err);
    }

    list.forEach(function (file) {
        console.log(file)
    })
})