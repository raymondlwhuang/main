const mongoose = require('mongoose');

const CrudSchema = new mongoose.Schema({
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

const Crud = mongoose.model('Crud',CrudSchema);

module.exports = Crud;