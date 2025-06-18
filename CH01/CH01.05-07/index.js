var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile)
var unlink = promisify(fs.unlink)
var beep = () => process.stdout.write('\u0007');;
var readdir = promisify(fs.readdir)
var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000)
})

Promise.race([
    delay(5),
    delay(2),
    delay(3),
    delay(3)
]).then(()=> readdir(__dirname)).then(console.log)