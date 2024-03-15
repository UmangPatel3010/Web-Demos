const express = require('express');
const mongoose = require('mongoose');
const Faculty = require('./routes/Faculty');
const Student = require('./routes/Student');

const conn = "mongodb+srv://hello_world:Hello@cluster0.uldte6e.mongodb.net/Demo?retryWrites=true&w=majority"
mongoose.connect(conn).then(() => {
    console.log("Connected with DB")
    const app = express();

    app.use("/student", Student)
    app.use("/faculty", Faculty)

    app.listen(3000, () => {
        console.log("listening on 3000");
    });
})

