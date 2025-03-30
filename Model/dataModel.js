const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  
        trim: true,      
    },
    email: {
        type: String,
        required: true,  
        trim: true,  
    },
    message: {
        type: String,
        required: true,  
        minlength: [5, 'Message must be at least 5 characters long'],  
    },
}, {
    timestamps: true,  
});

const Message = mongoose.model('Message', messageSchema);

module.exports = {
    Message
};
