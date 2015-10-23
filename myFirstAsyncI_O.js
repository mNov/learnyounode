var fs = require('fs');

var filename = process.argv[2];


fs.readFile(filename, 'utf-8', function(err, data) {
    if(err) throw err;
    var numNewLines = data.split("\n").length - 1;
    console.log(numNewLines);
});


