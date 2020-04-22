const express = require('express')
const {body} = require('express-validator')

const recipesController = require('../controllers/recipes')
// const isAuth = require('../middleware/is-auth')

const router = express.Router()

/* // Gets all of the posts
router.get('/posts', isAuth, recipesController.getPosts)

// Creates a single post
router.post('/posts', isAuth, [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5})
], recipesController.createPost
)

// Gets a single post
router.get('/post/:postId', isAuth, recipesController.getPost)

// Updates a single post
router.put('/post/postId', isAuth, [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5})
], recipesController.updatePost
)

// Deletes a single post
router.delete('/posts/:postId', isAuth, recipesController.deletePost) */

// Gets all of the posts
router.get('/posts', recipesController.getPosts)

// Creates a single post
router.post('/posts', [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5})
], recipesController.createPost
)

// Gets a single post
router.get('/post/:postId', recipesController.getPost)

// Updates a single post
router.put('/post/postId', [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5})
], recipesController.updatePost
)

// Deletes a single post
router.delete('/posts/:postId', recipesController.deletePost)

module.exports = router