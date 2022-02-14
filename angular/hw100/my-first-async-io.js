const fs = require('fs');
const content = process.argv[2]

fs.readFile(content, function (err, data) {
    if (err) {
        return console.log(error);
    }
    const Newlines = data.toString().split('\n').length - 1;
    console.log(Newlines);
})





