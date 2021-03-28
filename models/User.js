const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true //this email could not be repeated
    },
    password: {
        type: String,
        required: true

    },
    isActive: {
        type: Boolean,
        default: true
    }
},  { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
