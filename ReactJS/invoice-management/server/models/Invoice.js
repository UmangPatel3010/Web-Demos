const mongoose = require('mongoose');

const schema = mongoose.Schema({
    InvoiceID: {
        type:String,
        required:true
    },
    ClientName: {
        type:String,
        required:true
    },
    TotalAmount: {
        type:String,
        required:true
    },
    IssueDate: {
        type:String,
        required:true
    },
    DueDate: {
        type:String,
        required:true
    }
},{versionKey: false});

module.exports = mongoose.model('Invoice', schema);
