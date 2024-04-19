const express = require('express')
const router = express.Router()
const { chat, users, fact_board, likes } = require('../models')
const { validateToken } = require("../middlewares/AuthMiddleware")

//SELECT * FROM chat;
//every chat message (front end limits to 10 most recent)
router.get('/', validateToken, async (req, res) =>{
    const listOfFacts = await chat.findAll()
    res.json(listOfFacts);
})

//INSERT INTO chat (...) VALUES (...)
router.post("/", validateToken, async (req, res) => {
    const chatting = req.body;
    const username = req.user.username
    chatting.username = username
    await chat.create(chatting)
    res.json(chatting)
})
module.exports = router