var path = require('path');
var fs = require('fs');

require('http').createServer(function(req,res){
    //console.log('file path:' + req.url);

    var file = path.normalize( req.url);
    console.log('Try to server ',file );

    function reportError(err){
        console.log(err);
        res.writeHead(500);
        res.end('internal server error');
    }

    fs.exists(file, function(exists){
        if(exists){
            fs.stat(file,function(err, stat){
                if(err){
                    return reportError(err);
                }
                
                if(stat.isDirectory()){
                    res.writeHead(403);
                    res.end('Forbidden');
                }else{
                    var rs = fs.createReadStream(file);

                   rs.on('error',reportError);
                   res.writeHead(200);
                   rs.pipe(res);// 写法一
                   
                   /* 
                    * 写法二
                   **/
                //    rs.pipe(res,{end:false});//不结束

                //     rs.on('end',function(){
                //         res.write('hello node');        
                //         res.end();
                //      });
                }
            });

        }else{
            res.writeHead(404);
            res.end('Not found');
        }

    });

}).listen(4000);

// http://127.0.0.1:4000/home/carvendy/dev/git/hello-node/book/