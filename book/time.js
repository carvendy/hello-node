var timeout_ms = 2000;

var timeout = setTimeout(function(){
    console.log('do sime');
},timeout_ms);

clearTimeout(timeout);

// var period = 1000;
// setInterval(function(){
//     console.log("tick");
// },period);


process.nextTick(function nextTick1(){
    var a = 0;
    while(true){
        a++;
    }
});

process.nextTick(function nextTick2(){
    console.log("2.....");
});

setTimeout(function timeout(){
    console.log(1);
},1000);