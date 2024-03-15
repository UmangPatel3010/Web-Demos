const child_process = require('child_process');

console.log('Index.js');

child_process.exec("node Demo.js",(error, stdout)=>{
    if(error) 
        console.log(error);
    else 
        console.log(stdout);
});