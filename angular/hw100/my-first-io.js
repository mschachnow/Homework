const fs = require('fs');

const file = fs.readFileSync(process.argv[2]);
const Newlines = file.toString().split('\n').length - 1;
console.log(Newlines);