const mongoose = require('mongoose');

const DemoSchema = new mongoose.Schema({
    group: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    snip: {
        type: []
    },
    helpPath: {
        type: String,
        trim: true
    },
    output: {
        type: []
    },
    indicator: {
        type: Number,
        default: 0
    },
});

const Demo = mongoose.model('Demo',DemoSchema);

module.exports = Demo;