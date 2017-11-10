
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    var rs = fs.createReadStream('test.mp4');
    rs.pipe(res);
});

server.listen(4000);