const express = require('express');
const app = express();
app.get('/home', (req, res) => {
    res.send("<h1>Home Page using Get!</h1>");
});
app.get('/about', (req, res) => {
    res.send("<h1>About Page using Get!</h1>");
});
app.get('/contact', (req, res) => {
    res.send("<h1>Contact Page using Get!</h1>");
});
app.post('/home', (req, res) => {
    res.send("<h1>Home Page using Post!</h1>");
});
app.post('/about', (req, res) => {
    res.send("<h1>About Page using Post!</h1>");
});
app.post('/contact', (req, res) => {
    res.send("<h1>Contact Page using Post!</h1>");
});
app.delete('/home', (req, res) => {
    res.send("<h1>Home Page using Delete!</h1>");
});
app.delete('/about', (req, res) => {
    res.send("<h1>About Page using Delete!</h1>");
});
app.delete('/contact', (req, res) => {
    res.send("<h1>Contact Page using Delete!</h1>");
});
app.patch('/home', (req, res) => {
    res.send("<h1>Home Page using Patch</h1>");
});
app.patch('/about', (req, res) => {
    res.send("<h1>About Page using Patch</h1>");
});
app.patch('/contact', (req, res) => {
    res.send("<h1>Contact Page using Patch</h1>");
});
app.get('/', (req, res) => {
    res.send("<h1>Hello, world!</h1>");
});

app.listen(3000, () => {
    console.log("listening on 3000");
});