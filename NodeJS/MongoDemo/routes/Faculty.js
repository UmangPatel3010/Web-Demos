// const Router = require('express').Router();
const { Router } = require('express');
const Faculty = require('../model/Faculty');

Router().get("/find", async (req, res) => {
    const result = await Faculty.find();
    res.send(result);
})
Router().get("/find/:id", async (req, res) => {
    const result = await Faculty.find({ id: req.params.id });
    res.send(result);
})

module.exports = Router;