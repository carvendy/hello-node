var fs = require('fs');
var rs = fs.createReadStream('my_file.txt');
rs.on('data',function(data){
    console.log('got this data:',data);
});

var rs2 = fs.createReadStream('my_file.txt');
rs2.setEncoding("utf-8");
rs2.on('data',function(data){
    console.log('got this data2:',data);
});