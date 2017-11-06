var http = require('http');
var  fs = require('fs');

// http.createServer(function (request, response) {

//    var rs = fs.createReadStream('/home/carvendy/dev/git/hello-node/book/my_file.txt');

//    rs.on('data',function(data){
//        response.write(data);
//    });
//    rs.on('end',function(){
//     response.end();
//    });
// }).listen(8080);
http.createServer(function (request, response) {
       var rs = fs.createReadStream('/home/carvendy/dev/git/hello-node/book/my_file.txt');
    
       rs.on('data',function(data){
           if(!response.write(data)){
                rs.pause();
           }
       });
       rs.on('drain',function(){
           rs.resume();
       });
       rs.on('end',function(){
        response.end();
       });
    }).listen(8080);