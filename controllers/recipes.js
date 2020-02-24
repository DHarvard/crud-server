const fs = require('fs')
const path = require('path')

const { validationResult } = require('express-validator')

const Post = require('../models/post')

// Gets all of the posts
exports.getPosts = (req, res, next) => {
    Post.find().then(posts => {
        res.status(200).json({ message: 'Fetched posts successfully.', posts: posts})
    }).catch(err => { 
        if (err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}

// Creates a single post
exports.createPost = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.') 
        error.statusCode = 422
        throw error
    }
    // const imageUrl = req.body.path
    const title = req.body.title
    const content = req.body.content
    const post = new Post({
        title: title, 
        // imageUrl: imageUrl,
        content: content, 
        creator: {name: 'Darrin'},
    })
    post.save()
    .then(result => {
        res.status(201).json({
            message: 'Post created successfully!',
            post: result
        })
    })
    .catch(err => {
        if (err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}

// Gets a single post
exports.getPost = (req, res, next) => {
    const postId = req.params.postId
    Post.findById(postId)
    .then(post => {
        if (!post) {
            const error = new Error('Could not find post.')
            error.statusCode = 404
            throw error
        }
        res.status(200).json({ message: 'Post fetched.', post: post})
    })
    .catch(err => {
        if (err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}

// Update a single post
exports.updatePost = (req, res, next) => {
    const postId = req.params.PostId

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect.') 
        error.statusCode = 422
        throw error
    }
    const title = req.body.title
    const content = req.body.content
    /* let imageUrl = req.body.image
    if (req.file) {
        imageUrl = req.file.path
    }
    if (!imageUrl) {
        const error = new Error('No file picked.')
        error.statusCode = 422
        throw err
    } */
    Post.findById(postId)
    .then(post => {
        if (!post) {
            const error = new Error('Could not find post.')
            error.statusCode = 404
            throw error
        }
        post.title = title
        // post.imageUrl = imageUrl
        post.content
        return post.save()
    })
    .then (result => {
        res.status(200).json({ message: 'Post has been updated.', post: result })
    })
    .catch(err => {
        if (err.statusCode) {
            err.statusCode = 500
        }
        next(err)
    })
}

// Deletes a single post
exports.deletePost = (req, res, next) => {
    const postId = req.params.postId
    Post.findById(postId)
    .then(post => {
        if (!post) {
            const error = new Error('Could not find post.')
            error.statusCode = 404
            throw error
        }
        return Post.findByIdAndRemove(postID)
})
.then(result => {
    console.log(result)
    res.status(200).json({ message: 'Deleted the post.'})
})
.catch(err => {
    if (err.statusCode) {
        err.statusCode = 500
    }
    next(err)
})
}