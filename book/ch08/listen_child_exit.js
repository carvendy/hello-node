var spawn = require('child_process').spawn;

var child = spawn('ls',['-la']);
child.stdout.on('data',function(data){
    console.log('data from child :' + data);
});

// 当子进程退出时：（正常时为0）
child.on('exit', function(code){
    console.log('child process terminate with code ' + code);
});