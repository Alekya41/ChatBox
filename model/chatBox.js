const mongoose = require('mongoose');
const chatSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
 })
 module.exports = mongoose.model('chatContent',chatSchema)