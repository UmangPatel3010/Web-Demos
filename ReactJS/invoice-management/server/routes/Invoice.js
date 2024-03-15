const Router = require('express').Router();
const Invoice = require('../models/Invoice');

Router.get("/get", async (req, res) => {
    const result = await Invoice.find().sort('InvoiceID');
    res.json(result);
})

Router.get("/get/:id", async (req, res) => {
    if (req.params.id !== "undefined") {
        const result = await Invoice.findOne({ _id: req.params.id });
        res.json(result);
    } else {
        res.json({});
    }
})
Router.get("/get/undefined", async (req, res) => {
    res.json({ message: "No ID provided" });
})

Router.get("/search/:field/:value", async (req, res) => {
    let regex;
    if (req.params.field === "TotalAmount")
        regex = new RegExp("^" + req.params.value, 'i')
    else
        regex = new RegExp(req.params.value, 'i')
    const result = await Invoice.find({ [req.params.field]: regex });
    res.json(result);
})


Router.post("/insert", async (req, res) => {
    const invoiceData = new Invoice({
        InvoiceID: req.body.InvoiceID,
        ClientName: req.body.ClientName,
        TotalAmount: req.body.TotalAmount,
        IssueDate: req.body.IssueDate,
        DueDate: req.body.DueDate
    });
    const result = await invoiceData.save();
    res.json(result);
})

Router.put("/update/:id", async (req, res) => {
    const invoiceData = {
        InvoiceID: req.body.InvoiceID,
        ClientName: req.body.ClientName,
        TotalAmount: req.body.TotalAmount,
        IssueDate: req.body.IssueDate,
        DueDate: req.body.DueDate
    }
    const result = await Invoice.updateOne({ _id: req.params.id }, invoiceData);
    res.json(result);
})

Router.delete("/delete/:id", async (req, res) => {
    const result = await Invoice.deleteOne({ _id: req.params.id });
    res.json(result);
})

module.exports = Router;