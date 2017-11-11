var http = require('http');

var options ={
    host:'www.baidu.com',
    port:80,
    path:'/index.html',
    method:'post'

};

var request = http.request(options,function(res){
    console.log('got response:'+res.statusCode);
    console.log('headers:',res.headers);

    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log('BODY:',chunk);
    });
});

request.write('This is a piece of data .\n');
request.write('This is anothor a piece of data .\n');
request.end();


