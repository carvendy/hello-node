var fs = require('fs');

var path = '/home/carvendy/dev/git/hello-node/book/path.js';
fs.open(path,'r',function(err,fd){
    var stream = fs.createReadStream(null,{fd:fd,encoding:'utf8'});
    stream.on('data',function(data){
       // console.log('data:'+data);
    });
});

var options = {
                flags:'w',
                encoding:null,
                mode:0666
                };
var rw = fs.createWriteStream('/home/carvendy/dev/git/hello-node/book/my_file.txt',options);
//console.log(rw);
rw.on();