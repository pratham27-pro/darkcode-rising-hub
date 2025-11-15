const mongoose = require('mongoose');
const { Schema } = mongoose;

const userInfoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const User = mongoose.model('User', userInfoSchema);

module.exports = User;
