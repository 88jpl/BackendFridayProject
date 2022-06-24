// setup todo schema

const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    name: {type: String, default: ""},
    type: {type: [String], default: []},
    size: {type: [String], default: [] },
    blowout: {type: Boolean, default: true},
    date: {type: Date, default: new Date()},
    description: {type: String, default: ""},
    tags: {type: [String], default: []},
});

const EP = mongoose.model("Todo", todoSchema);



module.exports = EP;