var buf = new Buffer(16);

var bufArr = new Buffer([10,20,30,40,50]);

var bufCharset = new Buffer('并发','utf-8');

len = buf.write('www.carvendy.com');
console.log('写入字节数'+len);
len = bufArr.write('www.carvendy.com');
console.log('写入字节数'+len);

// toString
buf = new Buffer(256);
for(var i=0; i<26 ;i++){
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf-8',0,5));
console.log(buf.toString(undefined),0,5);

// json
buf = new Buffer('www.carvendy.com');
var json = buf.toJSON(buf);

console.log(json);

// concat
var buf1 = new Buffer('许仙');
var buf2 = new Buffer('www.carvendy.com');
var buf3 = Buffer.concat([buf1],[buf2]);

console.log('buffer3:'+buf3.toString());

// compare

var buf_ab = new Buffer('ab');
var buf_ac = new Buffer('ac');
var compareResult = buf_ab.compare(buf_ac);

if(compareResult ==0){
    console.log('equals');
}else if(compareResult < 0){
    console.log('buf_ab 在前');
}else{
    console.log('buf_ac 在前');
}

// copy
var buf_abc = new Buffer('abc');
var buf_copy= new Buffer(3);
buf_abc.copy(buf_copy);
console.log('buffer 2 content:' + buf_copy.toString);

// slice 
var myname = 'carvendy';
var buf_all = new Buffer(myname);
var buf_slice = buf_all.slice(0,myname.length-2);
console.log('buf_sclice content:' + buf_slice.toString());

// length

