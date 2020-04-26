const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        minlength: 3
    },
    name: {
        type: String,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        trim: true,
        minlength: 3
    }
});

const Course = mongoose.model('Course',CourseSchema);

module.exports = Course;