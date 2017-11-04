var spawn = require('child_process').spawn;

// 使用node 进程创建一个子进程执行plus_one 使用程序
var child = spawn('node',['/home/carvendy/dev/git/hello-node/book/ch08/plus_one.js']);

setInterval(function(){
    var number = Math.floor(Math.random() * 10000);

    child.stdin.write(number + '\n');
    child.stdout.once('data', function(data){
        console.log('child replied to '+ number + ' with:'+data);
    });
},1000);

child.stderr.on('data', function(data){
    process.stdout.write(data);
});