var fs = require('fs');
fs.stat("./path.js",function(err,stats){
    if(err){throw err;}
    console.log(stats);
});

// fs.open('./my_file.txt','r',function(err,fd){
//     if(err){throw err;}
//     var readBuffer = new Buffer(512),
//         bufferOffset = 0,
//         bufferLength = readBuffer.length,
//         filePosition = 10       ;

//     fs.read(fd,
//         readBuffer,
//         bufferOffset,
//         bufferLength,
//         filePosition,
//         function read(err,readeBytes){
//             if(err){
//                 throw err;
//             }
//             console.log('just read ' + readeBytes + ' bytes');
//             if(readeBytes > 0){
//                 console.log(readBuffer.slice(0,readeBytes));
//             }
//     });

// });

 
// fs.open('./my_file.txt','a',function(err,fd){
//     if(err){throw err;}

    
//     var writeBuffer = new Buffer('writing this string'),//控制权传递给write
//         bufferPosition = 0,
//         bufferLength = writeBuffer.length , filePosition = null;
    
//         fs.write(fd,writeBuffer,bufferPosition,filePosition,
//             function wrote(err,written){
//                 if(err){ throw err;}
//                 console.log('wrote ' + written +' bytes');
//             });

// });


function openAndWrite(writeBuffer, callback){
    fs.open('./my_file', 'a', function opened(err,fd){
        if(err){return callback(err);}
        function notifyError(err){
            fs.close(fd, function(){
                callback(err);
            });
        }
        var bufferOffset = 0,
            bufferLength = writeBuffer.length,
            filePosition = null;
        fs.write(fs,writeBuffer , bufferOffset, bufferLength, filePosition,
            function wrote(err, written){
                if(err){return notifyError(err);}
            } );
    });
}