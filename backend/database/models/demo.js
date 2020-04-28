const mongoose = require('mongoose');

const DemoSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        minlength: 3
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
    accepted : {
        type: Boolean,
        default: false
    }
});

const Demo = mongoose.model('Demo',DemoSchema);

module.exports = Demo;