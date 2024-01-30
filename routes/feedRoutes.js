const express = require('express')
const {body} = require("express-validator")


const router = express.Router()

//importando minha de feed
const feedController = require('../controllers/feedController')
const {validTitle, validContent} = require('../services/validators')

//criando rotas relacionadas ao feed
router.get('/posts', feedController.getPosts)
router.post('/posts',[validTitle, validContent], feedController.createPost)
router.patch('/posts/:postID', feedController.updatePost)
router.delete('/posts/:postID', feedController.deletePost)

/* router.post("/post", [
    body('title'.trim().isLength({ min:5})),
    body('content'.trim().isLength({ min:5}))
])
 */


module.exports = router