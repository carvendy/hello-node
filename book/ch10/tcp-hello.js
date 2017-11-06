var server = require('net').createServer();

var port = 4001;

server.on('listening',function(){
    console.log('Server is listenning port',port);
});

server.on('connection',function(socket){
    console.log('Server is connection');
    socket.end();
    server.close();
});

server.on('close',function(){
    console.log('Server is closed');
});

server.on('error',function(err){
    console.log('Error occured',err.message);
});

server.listen(port);

//telnet 127.0.0.1 4001 

/**打印
 * Server is connection
Server is closed
*/