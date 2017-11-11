exports.world = function() {
    console.log('Hello carvendy.');
}

function Student(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    }
    this.sayHello = function (){
        var id = parseInt(Math.random()*100);
        console.log('Hello ' + name+",your id is "+ id);
    }
}
module.exports = Student;

