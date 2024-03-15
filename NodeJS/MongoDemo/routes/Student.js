const Router = require('express').Router()
const Student = require('../model/Student');

Router.get("/find", async (req, res) => {
    const result = await Student.find();
    res.send(result);
})
Router.get("/find/:id", async (req, res) => {
    const result = await Student.find({ id: req.params.id });
    res.send(result);
})
module.exports = Router

