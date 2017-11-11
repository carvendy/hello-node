var util = require('util');

function Person(){
    this.name = 'tom';
    this.birth = '1993'
    this.sayHello = function (){
        console.log('Hello '+this.name);
    }
}
//声明
Person.prototype.showName = function(){
    console.log(this.name);
}

function Student(){
    this.name = 'stu';
}
//继承
util.inherits(Student,Person);
var person = new Person();
person.showName();
person.sayHello();

console.log(person);

var stu = new Student();
stu.showName();
//stu.sayHello(); //不能继承
console.log(stu);


// 字符串转换
function People(){
    this.name = 'bbq';
    this.toString = function (){
        return this.name;
    }
}

var obj = new People();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));

// 数组判定

console.log(util.isArray([]));
console.log(util.isArray({'id':123}));

console.log(util.isRegExp(/ab/));
console.log(util.isRegExp(new RegExp('d+')));

// 时间判定
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));// return string
console.log(util.isDate({}));

// 错误
console.log(util.isError(new Error('123')));
console.log(util.isError(new TypeError('类型错误')));
console.log(util.isError({ name: 'Error', message: 'an error occurred' }));