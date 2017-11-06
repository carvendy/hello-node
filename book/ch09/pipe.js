var http = require('http');
var  fs = require('fs');

http.createServer(function (request, response) {
       var rs = fs.createReadStream('/home/carvendy/dev/git/hello-node/book/my_file.txt');
       //rs.pipe(response);
       rs.pipe(response,{end:false});//不结束
      
       rs.on('end',function(){
          response.write('hello node');        
          response.end();
       });
    }).listen(8080);