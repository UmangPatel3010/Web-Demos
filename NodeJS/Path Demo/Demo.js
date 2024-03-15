const path = require('path');

const file= 'G:/materials/WT-II/Program/New Demo/Demo.js'
const file1= 'G:/materials/WT-II/Program/Node Demo/package.json'
const file2= '../Demo.js'
const filenew={
    dir:"PQR",
    base:"PLM.js",
}

console.log(path.normalize(file));
console.log(path.relative(file, file1));
console.log(path.basename(file));
console.log(path.extname(file));
console.log(path.dirname(file));
console.log(path.join("..","Program","Demo.js"));
console.log(path.parse(file));
console.log(path.format(filenew));
console.log(path.toNamespacedPath(file2));
