const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    name: String,
    gender: String,
    physics: Number,
    maths: Number,
    english: Number,
    id: Number,
});

module.exports = mongoose.model('Student', schema);