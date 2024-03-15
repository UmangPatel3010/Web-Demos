const child_process = require('child_process');

console.log('Demo.js');
child_process.exec("ipconfig",(error, stdout)=>{
    if(error)
        console.log(error);
    else{
        console.log("---------------inconfig---------------");
        console.log(stdout);
    }
});
child_process.exec("ping 8.8.8.8",(error, stdout)=>{
    if(error)
        console.log(error);
    else{
        console.log("---------------ping 8.8.8.8---------------");
        console.log(stdout);
    }
});
// child_process.exec("tracert www.facebook.com",(error, stdout)=>{
//     if(error)
//         console.log(error);
//     else{
//         console.log("---------------tracert www.facebook.com---------------");
//         console.log(stdout);
//     }
// });