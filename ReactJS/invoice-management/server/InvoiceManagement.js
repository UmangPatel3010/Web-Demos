const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Invoice = require('./routes/Invoice');

mongoose.connect("mongodb+srv://hello_world:Hello@cluster0.uldte6e.mongodb.net/InvoiceManagment").then(() => {
// mongoose.connect("mongodb://localhost:27017/InvoiceManagment").then(() => {
    console.log("Connected with DB")
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/invoice', Invoice);

    app.listen(5000, () => {
        console.log("listening on 3000");
    });
});