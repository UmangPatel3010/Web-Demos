const express = require('express');
const app = express();

thing = ['Ball', 'Pen', 'Pencil', 'Mouse', 'Keyboard'];
function display() {
    result = "<ul>"
    for (i of thing) {
        result += "<li><h3>" + i + "</h3></li>";
    }
    result += "</ul>"
    return result;
}

app.get('/things', (req, res) => {
    res.send(display());
})

app.get('/things/:id', (req, res) => {
    res.send("<ul><li>" + thing[req.params.id] + "</li></ul>");
})

app.post('/things/:data', (req, res) => {
    thing.push(req.params.data);
    res.send(display());
})

app.delete('/things/:id', (req, res) => {
    thing.splice(parseInt(req.params.id), 1);
    res.send(display());
})

app.patch('/things/:id/:data', (req, res) => {
    thing[req.params.id] = req.params.data;
    res.send(display());
})

app.listen(3000, (req, res) => {
    console.log('listening on 3000');
});