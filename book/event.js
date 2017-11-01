var em = new (require('events').EventEmitter)();
em.emit('event1');
//em.emit('error', new Error('My mistake'));

var fs = require('fs');
var readerSteam = fs.createReadStream('output.txt');
function receiveData(data1){
    console.info("got data from file,%j",data1);
}

function receiveData2(data1){
    throw new Error('hehe');
}

function receiveData3(data1){
    console.info("got data from file.....,%j",data1);
}
readerSteam.addListener("data",receiveData);
//readerSteam.on("data",receiveData2); //异常后，3就不执行了
readerSteam.on("data",receiveData3);