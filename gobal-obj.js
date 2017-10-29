console.log(__filename);//文件全路径

console.log(__dirname);

function printHello(){
    console.log( "2秒后执行，Hello, World!");
 }
 // 两秒后执行以上函数
 setTimeout(printHello, 2000);

 //
 console.log('byvoid%diovyb', 1991); 

 console.trace();//向标准错误流输出当前的调用栈。



 console.time("获取数据");//标识符
for(var i = 0; i < 10;i++){
    console.log(i);
}

 console.timeEnd('获取数据');


 /*
 *  http://www.runoob.com/nodejs/nodejs-global-object.html
 *  一个与操作系统的简单接口
 */

 process.on('exit',function(code){
     setTimeout(function(){
         console.log('不会进来');
     },0);

     console.log('退出码',code);
 });
 console.log('程序执行结束');

 //
process.stdout.write('Hello \n');

process.argv.forEach(function(val,index,array) {
    console.log(index+':'+val);
}, this);

console.log(process.execPath);
console.log(process.platform);

