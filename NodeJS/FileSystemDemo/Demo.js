const fs = require("fs");
console.log(fs)
fs.writeFileSync("FileSystemDemo/Demo.txt","Hello world!!")
// fs.link("FileSystemDemo/Demo.txt","FileSystemDemo/Demo789.txt",()=>{console.log("Hello world");})
// fs.truncateSync("Demo789.txt",5)
fs.appendFileSync("FileSystemDemo/Demo.txt","\nHow Are You??")
fs.renameSync("FileSystemDemo/Demo.txt","FileSystemDemo/Demo123.txt")
const data = fs.readFileSync("FileSystemDemo/Demo.js","utf-8");
fs.readFile("FileSystemDemo/Demo123.txt","utf-8",(e,data) => {
    console.log(data);
    if(e != null) console.log(e);
});
console.log(data)
fs.unlinkSync("FileSystemDemo/Demo123.txt");
// console.log(fs)

