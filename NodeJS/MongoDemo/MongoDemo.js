const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./model/Faculty');


const conn = "mongodb+srv://hello_world:Hello@cluster0.uldte6e.mongodb.net/Demo?retryWrites=true&w=majority"

mongoose.connect(conn).then(() => {
    console.log("Connected with DB")
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.get("/faculty/find", async (req, res) => {
        const result = await Faculty.find();
        res.send(result);
    })
    app.get("/faculty/find/:id", async (req, res) => {
        const result = await Faculty.findOne({ id: req.params.id });
        res.json(result);
    })
    app.get("/faculty/search/:searchText", async (req, res) => {
        const regexp = new RegExp(req.query.searchText, "i");
        const result = await Faculty.find({
            $or: [
                { FacultyName: regexp },
                { FacultyDesignation: regexp },
                { FacultyEducationQualification: regexp },
            ]
        });
        res.json(result);
    })
    app.get("/faculty/sort", async (req, res) => {
        const result = await Faculty.find().sort('FacultyEducationQualification -FacultyName');
        res.json(result);
    })
    app.get("/faculty/skplim/:skip/:limit", async (req, res) => {
        const result = await Faculty.find().skip(req.params.skip).limit(req.params.limit);
        res.json(result);
    })

    app.delete("/faculty/delete/:id", async (req, res) => {
        const result = await Faculty.deleteOne({ id: req.params.id });
        res.json(result);
    })

    app.post("/faculty/insert", async (req, res) => {
        const fac = new Faculty({
            id: req.body.id,
            FacultyName: req.body.FacultyName,
            FacultyDesignation: req.body.FacultyDesignation,
            FacultyEducationQualification: req.body.FacultyEducationQualification,
            FacultyExperience: req.body.FacultyExperience,
            FacultyWorkingSince: req.body.FacultyWorkingSince,
            FacultyImage: req.body.FacultyImage,
        });
        const result = await fac.save();
        res.json(result);
    })

    app.patch("/faculty/update/:id", async (req, res) => {
        const result = await Faculty.updateOne({ id: req.params.id }, req.body);
        res.json(result);
    })

    app.listen(3000, () => {
        console.log("listening on 3000");
    });
})

