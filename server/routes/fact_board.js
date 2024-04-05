const express = require('express')
const router = express.Router()
const { fact_board } = require('../models')

router.get('/', async (req, res) =>{
    const listOfPosts = await fact_board.findAll()
    res.json(listOfPosts);

})
router.post("/", async (req, res) =>{
    const post = req.body

    await fact_board.create(post)

    res.json(post)
})


module.exports = router