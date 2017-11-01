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


var util = require('util');
var events = require('events').EventEmitter;
var MyClass = function(){
    //原型链
    util.inherits(MyClass, events);
}

MyClass.prototype.someMethod = function (){
    this.emit("custom event","argument 1","argument 2");
}

var myClazz = new MyClass();
myClazz.on('custom event',function(str1,str2){
    console.log("one:%s,two:%s",str1,str2);
});

myClazz.someMethod();