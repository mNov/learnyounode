var fs = require('fs');

var filename = process.argv[2];

var fileContents = fs.readFileSync(filename).toString();

var numNewLines = fileContents.split("\n").length - 1;

console.log(numNewLines);