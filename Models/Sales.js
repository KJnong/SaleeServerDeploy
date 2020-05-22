const mongoose = require('mongoose');

const saleeSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        min:8
    },
    item:{
        type: String,
        required: true,
        min:2,
        max:50
    },
    was:{
        type: Number,
        required: true,
    },
    now:{
        type: Number,
        required: true,
    },
    imagePath:{
        type: String,
        required: true,
    },
    created:{
        type:Date,
    }

})

module.exports = mongoose.model("salee", saleeSchema)