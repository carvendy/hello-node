var fs = require('fs');

// 写入流
var write_data = '许仙,www.carvendy.com';
var writeSteam = fs.createWriteStream('output.txt');

writeSteam.write(write_data,'UTF8');
//标记文件末尾
writeSteam.end();
writeSteam.on('finish',function(){
    console.log('写入成功');
});
console.log('程序执行完毕');

var data = '';

var readerSteam = fs.createReadStream('output.txt');
readerSteam.setEncoding('utf-8');

readerSteam.on('data',function(chunk){
    data += chunk;
});

readerSteam.on('end',function(){
    console.info(data);
});

readerSteam.on('error',function(){
    console.log(err.stack);
});

// 管道(事先创建两个文件)
var readerSteam_pipe = fs.createReadStream('input.txt');
var writeSteam_pipe = fs.createWriteStream('output_pipe.txt');//不共用output.txt,有并发问题
readerSteam_pipe.pipe(writeSteam_pipe);

console.log('程序执行完毕');
