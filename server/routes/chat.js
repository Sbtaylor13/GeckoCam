const express = require('express')
const router = express.Router()
const { chats } = require('../models')
const { validateToken } = require("../middlewares/AuthMiddleware")

router.get('/', async (req, res) =>{
    const listOfPosts = await chats.findAll()
    res.json(listOfPosts);
})
router.post("/", validateToken, async (req, res) => {
    const chat = req.body;
    const username = req.user.username
    chat.username = username
    await chats.create(chat)
    res.json(chat)
})

module.exports = router