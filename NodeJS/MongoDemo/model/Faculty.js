const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: String,
    FacultyName: String,
    FacultyDesignation: String,
    FacultyEducationQualification: String,
    FacultyExperience: String,
    FacultyWorkingSince: String,
    FacultyImage: String,
});

module.exports = mongoose.model('Faculty', schema);