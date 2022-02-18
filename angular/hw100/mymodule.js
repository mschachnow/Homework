'use strict';
const fs = require('fs');
const path = require('path');

module.exports = function (dirName, extensionFilter, callback) {

    fs.readdir(dirName, function (err, list) {
        if (err) {
            return callback(err);
        }

        list = list.filter(function (file) {
            return path.extname(file) === '.' + extensionFilter;
        })
        callback(null, list);
    })

}