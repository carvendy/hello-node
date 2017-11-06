var ws = require('fs').createWriteStream('mysocket.txt');

require('net').createServer(function(socket){
    // socket.setTimeout(10000);

    // socket.on('timeout',function(){
    //     console.log('time out');
    // });

    // socket.setTimeout(2000,function(){
    //     socket.write('idle timeout, disconnecting ,byte!');
    //     socket.end();
    // });
    socket.setKeepAlive(true,1900);//发送空包

    socket.pipe(ws);
}).listen(4001);