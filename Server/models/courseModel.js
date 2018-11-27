const mongoose = require('mongoose');
let courseModel = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    }
});
module.exports = mongoose.model('course',courseModel);