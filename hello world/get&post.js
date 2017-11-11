var http = require('http');
var url = require('url');
var util= require('util');

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
//     res.end(util.inspect(url.parse(req.url,true)));
// }).listen(8081);


//http://localhost:8081/user?name=hai&age=86
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});

//     var params = url.parse(req.url,true).query;
//     res.write('name:'+params.name);
//     res.write('\n');
//     res.write('age:'+params.age);
//     res.end();
// }).listen(3000);


var http = require('http');
var querystring = require('querystring');
 
// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';
 
// http.createServer(function (req, res) {
//   var body = "";
//   req.on('data', function (chunk) {
//     body += chunk;
//   });
//   req.on('end', function () {
//     // 解析参数
//     body = querystring.parse(body);
//     // 设置响应头部信息及编码
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
//     if(body.name && body.url) { // 输出提交的数据
//         res.write("网站名：" + body.name);
//         res.write("<br>");
//         res.write("网站 URL：" + body.url);
//     } else {  // 输出表单
//         res.write(postHTML);
//     }
//     res.end();
//   });
// }).listen(3000);


var querystring = require('querystring');
http.createServer(function(req,res){
    var body = '';

    req.on('data',function(chunk){
        body += chunk;
    });
    console.log('before:'+body);

    req.on('end',function(){
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    
        if(body.name) { // 输出提交的数据
            res.write("name：" + body.name);
            res.write("<br>");
           // res.write("age：" + body.age);
        } else {  // 输出表单
            res.write('123');
        }
        res.end();
    });
}).listen(3001);