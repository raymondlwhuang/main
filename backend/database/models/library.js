const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({
    id: {
        type: Number
    },    
    group: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    snips: {
        type: []
    },
    helpPath: {
        type: String,
        trim: true
    },
    outputs: {
        type: []
    },
    indicator: {
        type: Number,
        default: 0
    },
    accepted : { //needed to set accepted to true before we could use
        type: Boolean,
        default: false
    }
});

const Library = mongoose.model('Library',LibrarySchema);

module.exports = Library;