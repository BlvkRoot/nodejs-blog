const mongoose = require('../database/db-conn');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Posts', PostSchema);

module.exports = Post