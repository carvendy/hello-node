
require('net').createServer(function(socket){
    var rs = require('fs').createReadStream('mysocket.txt');
    

    rs.pipe(socket);
}).listen(4001);