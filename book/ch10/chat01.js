var net = require('net');

var server = net.createServer();
var sockets = [];

server.on('connection',function(socket){  //连接
    console.log('got a new connection');
    sockets.push(socket);

    // socket.on('data',function (data){
    //     console.log('got data:',data);//获取数据
    // });
    sockets.forEach(function(otherSocket){
        if(otherSocket != null){
            otherSocket.write(data);
        }
    });
});

server.on('error',function(err){
    console.log('Server error:',err.message);
});

server.on('close',function(){
   // console.log('Server closed');
   var index = sockets.indexOf(socket);
   sockets.splice(index,1);
});

server.listen(4001);