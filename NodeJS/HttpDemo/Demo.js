const http = require('http')

http.createServer((req, res) => {
    // console.log(req.url)
    // console.log(req.method)
    if(req.method === 'GET' && req.url==='/home')
        res.write("Home Page Using Get!");
    else if(req.method === 'POST' && req.url==='/home')
        res.write("Home Page Using POST!");
    else if(req.method === 'PUT' && req.url==='/home')
        res.write("Home Page Using PUT!");
    else if(req.method === 'DELETE' && req.url ==='/home')
        res.write("Home Page Using DELETE!");
    else if(req.method === 'GET' && req.url==='/about')
        res.write("About Page Using GET!");
    else if(req.method === 'POST' && req.url==='/about')
        res.write("About Page Using POST!");
    else if(req.method === 'PUT' && req.url==='/about')
        res.write("About Page Using PUT!");
    else if(req.method === 'DELETE' && req.url==='/about')
        res.write("About Page Using DELETE!");
    else if(req.method === 'GET' && req.url==='/contact')
        res.write("Contact Page Using GET!");
    else if(req.method === 'POST' && req.url==='/contact')
        res.write("Contact Page Using POST!");
    else if(req.method === 'PUT' && req.url==='/contact')
        res.write("Contact Page Using PUT!");
    else if(req.method === 'DELETE' && req.url==='/contact')
        res.write("Contact Page Using DELETE!");
    else
        res.write("Hello World!");
    res.end();
}).listen(3000, () => { console.log('server is listening on port 3000') })