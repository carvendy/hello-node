var spawn  = require('child_process').spawn;
// 创建 
var child = spawn('tail',['-f','output.txt']);
// 事件监听
child.stdout.on('data', function(data){
    console.log('tail output:' + data);
});