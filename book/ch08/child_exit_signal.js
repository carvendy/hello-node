var spawn = require('child_process').spawn;

// 生成子进程运行""
var child = spawn('sleep',['10']);

setTimeout(function(){
   // child.kill();
   child.kill('SIGUSR2');
},1000);

// kill
child.on('exit',function(code,signal){
    if(code){
        console.log('child process terminated with code ' + code);
    }else{
        console.log('child process signal '+signal);
    }
});
//SIGTERM

// 信号处理
process.on('SIGUSR2', function(){
    console.log('Got a SIGUSR 2 signal');
});