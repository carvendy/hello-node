var spawn = require('child_process').spawn;

// 以命令'ls does_not_exist.txt'
var child = spawn('ls',['does_not_exist.txt']);

// 当子进程退出时（code:2 ，有错误）
child.on('exit', function(code){
    console.log('child process terminated with code ' + code);
});