

var net = require('net');
var port = 4001;
var conn;

var quitting = false;
var retryInterval = 3000;
var retriedTimes = 0;
var maxRetries = 10;

process.stdin.resume();

process.stdin.on('data',function(data){
    if(data.toString().trim().toLowerCase() === 'quit'){
        quitting  = true;
        console.log('quitting...');
        conn.end();
        process.stdin.pause();
    }else{
        conn.write(data);
    }
});

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
        if(!quitting){
            console.log('close connection');
            reconnect();
        }
        
    });

    
})();
// 不断报错，不断重连（客户端代码，需要服务端）  使用第十章的 chat-server.js
