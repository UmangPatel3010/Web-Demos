const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: String,
    Name: String,
    Age: String,
});

module.exports = mongoose.model('demo', schema);