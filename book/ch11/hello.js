var http = require('http');

var server = http.createServer();
server.on('request', function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    // res.write('Hello~!');
    // res.end();

    res.end('start~!');
});

server.listen(4000);