const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    retailer: {
        type: String,
        required: true,
        min: 3,
        max:15
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max:20
    },
    password: {
        type: String,
        required: true,
        max:100
    },
    date: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('User', userSchema )

