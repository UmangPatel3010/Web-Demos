const express = require('express');
const app = express();
const bodyParser = require('body-parser');

data = [
    {name:"abc",id:1},
    {name:"pqr",id:2},
    {name:"stu",id:3},
    {name:"xyz",id:4},
    {name:"mno",id:5},
    {name:"efg",id:6},
];


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.get('/try', (req, res) => {
    // res.json(req.body)
    console.log("hello");
    res.send(req.body);
})

app.listen(3000, (req, res) => {
    console.log('listening on 3000');
});