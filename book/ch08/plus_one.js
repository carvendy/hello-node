process.stdin.resume();
process.stdin.on('data',function(data){
    //  输入流
    var number;
    try {
        number = parseInt(data.toString(),10);
        number += 1;

        process.stdout.write(number + '\n');
    } catch (error) {
        process.stderr.write(err.message + '\n');
    }

});