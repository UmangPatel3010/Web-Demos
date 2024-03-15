const fs = require('fs');
const http = require('http');

fs.writeFileSync("HttpAndFileSystem/Home.html","<html>\n\t<head>\n\t\t<title>Home Page</title>\n\t<head>\n\t<body>\n\t\t<h1>This is a Home Page</h1>\n\t\t<a href='./home'><button>Home</button></a>&nbsp;&nbsp;\n\t\t<a href='./about'><button>About</button></a>&nbsp;&nbsp;\n\t\t<a href='./contact'><button>Contact</button></a>&nbsp;&nbsp;\n\t</body>\n</html>");
fs.writeFileSync("HttpAndFileSystem/About.html","<html>\n\t<head>\n\t\t<title>About Us Page</title>\n\t<head>\n\t<body>\n\t\t<h1>This is a About Us Page</h1>\n\t\t<a href='./home'><button>Home</button></a>&nbsp;&nbsp;\n\t\t<a href='./about'><button>About</button></a>&nbsp;&nbsp;\n\t\t<a href='./contact'><button>Contact</button></a>&nbsp;&nbsp;\n\t</body>\n</html>");
fs.writeFileSync("HttpAndFileSystem/Contact.html","<html>\n\t<head>\n\t\t<title>Contact Page</title>\n\t<head>\n\t<body>\n\t\t<h1>This is a Contact Page</h1>\n\t\t<a href='./home'><button>Home</button></a>&nbsp;&nbsp;\n\t\t<a href='./about'><button>About</button></a>&nbsp;&nbsp;\n\t\t<a href='./contact'><button>Contact</button></a>&nbsp;&nbsp;\n\t</body>\n</html>");


http.createServer((req, res)=> {
    if(req.url === "/home"){
        let data=fs.readFileSync("HttpAndFileSystem/Home.html","utf-8");
        res.write(data);
    }
    else if(req.url === "/contact"){
        let data = fs.readFileSync("HttpAndFileSystem/Contact.html","utf-8");
        res.write(data);
    }else if(req.url === "/about"){
        let data = fs.readFileSync("HttpAndFileSystem/About.html","utf-8");
        res.write(data);
    }
    else{
        res.write("<html><head><title>Home Page</title><head><body><a href='./home'><button>Home</button></a>&nbsp;&nbsp;<a href='./about'><button>About</button></a>&nbsp;&nbsp;<a href='./contact'><button>Contact</button></a>&nbsp;&nbsp;</body></html>");
    }
    res.end();
}).listen(3000,()=>{ console.log('server is listening on port 3000') });