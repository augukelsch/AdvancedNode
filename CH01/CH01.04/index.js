var fs = require('fs');
var { promisify } = require('util');

var writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "this is a sample").then(()=> console.log("file successufully created")).catch((error)=> console.log(error.message))