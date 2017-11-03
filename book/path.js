var path = require('path');
var path2 = require('path');
//path.normalize('/haha/1/2//3/..');
//console.log(path);

path.join('/foo/','bar','baz/asdf','quux','...');
//console.log(path);

var paths = require('path');
paths.resolve('/ffoo/jjj/1');
//console.log（）；

var filePath = path.relative('/home/carvendy/dev','/opt');
console.log(filePath);

console.log(path.basename("/home/carvendy/dev/git/hello-node/book/path.js"));
console.log(path.basename("/home/carvendy/dev/git/hello-node/book/path.js",".js"));

var fs = require('fs');
fs.exists("/home/carvendy/dev/git/hello-node/book/path.js",function(exists){
    console.log('exists:',exists);
});
