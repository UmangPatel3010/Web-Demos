const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const Faculty = require('./model/Demo');


const conn = "mongodb://localhost:27017/Demo"

mongoose.connect(conn).then(() => {
    console.log("Connected with DB")
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.get("/find",async (req,res)=>{
        const result = await Faculty.find();
        res.send(result);
    })
    app.get("/find/:id",async (req,res)=>{
        const result = await Faculty.findOne({id:req.params.id});
        res.json(result);
    })

    app.delete("/delete/:id",async (req,res)=>{
        const result = await Faculty.deleteOne({id:req.params.id});
        res.json(result);
    })

    app.post("/insert",async (req,res)=>{
        const fac = new Faculty(req.body);
        const result = await fac.save();
        res.json(result);
    })

    app.patch("/update/:id",async (req,res)=>{
        const result = await Faculty.updateOne({id:req.params.id},req.body);
        res.json(result);
    })

    app.listen(3000, () => {
        console.log("listening on 3000");
    });
})

