const express = require('express')

const router = express.Router()

//importando minha de feed
const feedController = require('../controllers/feedController')


//criando rotas relacionadas ao feed
router.get('/posts', feedController.getPosts)

module.exports = router