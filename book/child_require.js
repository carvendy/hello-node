
var child_process = require ('child_process');
var exec = child_process.exec;
//exec(command,callback);

exec('ls', function (err, stdout , stderr){
    console.log(stdout);
})

var  options = {
    timeout : 1000,
    killSignal :'SIGKILL'
};
// exec('cat *.js | wc -l',options ,function(err, stdout, stderr){
//     console.log(stdout);
// });

var env = process.env,
    varName ,
    envCopy = {};
    for(varName in env){
        envCopy[varName] = env[varName];
        console.log('-->'+varName);
    }
    
    envCopy['CUSTOM ENV VAR'] = 'some value';
    envCopy['CUSTOM ENV VAR 2'] = 'SOME VALUE';
    
    
    exec('ls -la', {env:envCopy},function (err, stdout, stderr){
        if(err){throw err;}
        console.log('xx'+envCopy['CUSTOM ENV VAR'] );
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    });

//var exec = require('');
