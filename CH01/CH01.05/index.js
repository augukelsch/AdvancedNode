var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile)
var unlink = promisify(fs.unlink)
var beep = () => process.stdout.write("\x07");

var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000)
})

const doStuffSequentially = () => Promise.resolve()
    .then(()=> console.log('starting'))
    .then(()=> delay(1))
    .then(()=> 'waiting')
    .then(message => console.log(message))
    .then(()=> delay(2))
    .then(()=> writeFile('file.txt', 'Sample File...'))
    .then(beep)
    .then(()=> 'file.txt created')
    .then(console.log)
    .then(()=> delay(3))
    .then(()=> unlink('file.txt'))
    .then(()=> 'file.txt removed')
    .then(console.log)
    .catch((error)=> console.error(error))

doStuffSequentially();
