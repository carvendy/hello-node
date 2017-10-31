var buffer = new Buffer('this is the content of my buffer');
var smallerBuffer = buffer.slice(8,19);
console.log(smallerBuffer.toString());

var buf1 = new Buffer('this is the content of my buffer');
var buf2 = new Buffer(11);

var targetStart = 0;
var sourceStart = 8;
var sourceEnd  = 19;

buf1.copy(buf2, targetStart , sourceStart , sourceEnd);
console.log(buf2.toString());

var utf8Str = 'my string';
var bufUtf8 = new Buffer(utf8Str);
var base64String = bufUtf8.toString('base64');
console.log(base64String);

