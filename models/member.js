const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const memberSchema=new Schema({
    name : String,
    age: Number,
    fees_paid : Boolean,
    batch : {
        type: String,
        enum:['6-7AM', '7-8AM', '8-9AM','5-6PM'],
        required:true
    }
});

module.exports=mongoose.model('Member',memberSchema);