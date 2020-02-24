const mongoose = require('mongoose')
const Schema = mongoose.Schema

// This is the post schema which defines what a post should look like
const postSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectID,
        ref: 'User',
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)