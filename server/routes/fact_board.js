const express = require('express')
const router = express.Router()
const { fact_board, likes} = require('../models')
const { validateToken } = require("../middlewares/AuthMiddleware")

/*
retrieves all records from fact_board table and for each record it includes 
records from the likes table based on foreign key 
fact_board.id = likes.factBoardId
*/
//SELECT * FROM fact_board INNER JOIN likes ON fact_board.id = likes.factBoardId;
router.get('/', async (req, res) =>{
    const listOfPosts = await fact_board.findAll({include: [likes]}) //all elements in the column
    res.json(listOfPosts);
})

//SELECT * FROM fact_board WHERE id = :id;
router.get('/byID/:id', async (req, res) => {
    const id = req.params.id;
    const fact = await fact_board.findByPk(id);
    res.json(fact);
})

//INSERT INTO fact_board (...) VALUES (...);
router.post("/", validateToken, async (req, res) =>{
    const post = req.body
    post.user_id = req.user.username
    await fact_board.create(post)
    res.json(post)
})
module.exports = router