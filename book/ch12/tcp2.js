

var net = require('net');
var port = 4001;
var conn;

var retryInterval = 3000;
var retriedTimes = 0;
var maxRetries = 10;

process.stdin.resume();

(function connect(){
    function reconnect(){
        if(retriedTimes >= maxRetries){
            throw new Error('Max retries have been exceeded,give up');
        }
        retriedTimes +=1;
        setTimeout(connect,retryInterval);
    }

    conn = net.createConnection(port);

    conn.on('connect', function(){
        retriedTimes = 0;
        console.log('connected to server');
    });

    conn.on('error', function(err){
        console.log('Error in connect:',err);
    });

    conn.on('close',function(){
        console.log('close connection');
        reconnect();
    });

    //conn.pipe(process.stdout,{end:false});
    process.stdin.pipe(conn,{end:false});
   
})();
// 不断报错，不断重连