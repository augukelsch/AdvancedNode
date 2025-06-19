const { stat,createReadStream } = require('fs');
const { createServer } = require('http');
const {promisify} = require('util');
const fileName = '../../powder-day.mp4';
const fileInfo = promisify(stat)

createServer(async (req,res) => {
    const {size} = await fileInfo(fileName);
    res.writeHead(200,{
        'Content-length': size,
        'Content-Type': 'video/mp4'
    });
    createReadStream(fileName).pipe(res);

}).listen(3000, ()=> console.log('Server running on http://localhost:3000'))


