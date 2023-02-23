const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    username: {
        type: String,
        required: true
    }
})

const commentModel = mongoose.model('Comment', commentSchema);
module.exports = commentModel;