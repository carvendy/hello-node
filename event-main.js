var events = new require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function (){
    console.log('监听器1');
}

var listener2 = function (){
    console.log('监听器2');
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var evenListeners = eventEmitter.listenerCount(eventEmitter,'connection');
console.log(evenListeners+"个监听器监听连接事件");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listener1 不再受监听');

eventEmitter.emit('connection');

evenListeners = eventEmitter.listenerCount(eventEmitter,'connection');
console.log(evenListeners+'个监听器');

console.log('程序执行完毕。');


