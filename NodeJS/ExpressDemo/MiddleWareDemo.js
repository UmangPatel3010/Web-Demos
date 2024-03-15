const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

function middleware(req, res, next) {
    const { user, pass } = req.body;
    if (user === "hello_world" && pass === "Hello@123")
        next();
    else
        res.status(401).send('Credential is invalid');
}
app.get('/try',middleware, (req, res) => {
    res.send(req.body);
    console.log(req.socket.remoteAddress);
})
// app.use("/hello", express.static("./ExpressDemo/newfold"))

// app.get("/", (req, res) => {
//     console.log("hello world!");
//     res.end()
// })
app.listen(3000, () => {
    console.log('listening on 3000');
});