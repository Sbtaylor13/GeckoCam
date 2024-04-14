const express = require('express')
const router = express.Router()
const { fact_board, likes} = require('../models')

//SELECT * FROM fact_board INNER JOIN likes ON fact_board.id = likes.factBoardId;
router.get('/', async (req, res) =>{
    const listOfPosts = await fact_board.findAll({include: [likes]}) //all elements in the column
    res.json(listOfPosts);
})
router.get('/byID/:id', async (req, res) => {
    const id = req.params.id;
    const fact = await fact_board.findByPk(id);
    res.json(fact);
})
router.post("/", async (req, res) =>{
    const post = req.body
    await fact_board.create(post)
    res.json(post)
})
module.exports = router