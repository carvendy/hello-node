
var http = require('http');
var swawn = require('child_process').spawn;

var server = http.createServer(function(req,res){
    var child = spawn('tail',['-f','/var/log/system.log']);
    child.stdout.pipe(res);
    res.on('end',function(){
        child.kill();
    });
});

server.listen(4000);