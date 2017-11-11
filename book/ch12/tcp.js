var net = require('net');
var port = 4000;
var conn;

process.stdin.resume();

(function connect(){
    conn = net.createConnection(port);

    conn.on('connect', function(){
        console.log('connected to server');
    });

    conn.on('error', function(err){
        console.log('Error in connect:',err);
    });

    conn.on('close',function(){
        console.log('close connection');
        connect();
    });

    conn.pipe(process.stdout,{end:false});
    process.stdin.pipe(conn);
})();
// 不断报错，不断重连