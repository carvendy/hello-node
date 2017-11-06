var server = require('net').createServer(function(socket){
    console.log('new connection');

    socket.setEncoding('utf-8');
    socket.write('hello node, enter "quit" to exit.\n ');

    socket.on('data',function(data){
        console.log('got ',data.toString());
        if(data.trim().toLowerCase() == 'quit'){
            socket.write('Bye');
            return socket.end();
        }
        socket.write(data);
    });

    socket.on('data',function(){
        console.log('Client connection ended');
    });
}).listen(4001);