var fs = require('fs');

// 异步读取
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log('异步读取:'+ data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log('同步读取:'+ data.toString());

console.log('程序执行完毕~!');

console.log('ready open file');
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.log(err);
    }
    console.log('file open success');
});

fs.stat('fs.js',function(err,stats){
    console.log('isFile?'+stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
})


// 关闭文件
var buf = new Buffer(1024);

console.log('准备打开文件！');
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.log(err);
    }
    console.log('open success~!');
    console.log('ready to read');

    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        if(bytes > 0){
            console.log(buf.slice(0,bytes).toString());
        }

        fs.close(fd,function(err){
            if(err){
                console.log(err);
            }
            console.log('file close success');
        });
    });
});

fs.createWriteStream('delete.txt')
// delete ...
console.log('create file~!');
fs.unlink('delete.txt',function(err){
    if(err){
        return console.log(err);
    }
    console.log('delete file');
});

// console.log('create dir')
// fs.mkdir('test',function(err){
//     if(err){
//         return console.log(err);
//     }
//     console.log('dir create success');
// });

fs.readdir('/code/node',function(err,files){
    if(err){
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
    }, this);
});

//fs.rmdir 慎用