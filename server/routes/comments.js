const express = require('express')
const router = express.Router()
const { comments } = require('../models')
const { validateToken } = require("../middlewares/AuthMiddleware")


//SELECT * FROM comments WHERE factBoardId = factId;
router.get("/:factId", async (req, res) => {
    const factId = req.params.factId;
    const com = await comments.findAll({where: { factBoardId: factId}});
    res.json(com);
})

//INSERT INTO comments (...) VALUES (...)
router.post("/", validateToken, async (req, res) => {
    const comment = req.body;
    const username = req.user.username
    comment.username = username
    await comments.create(comment)
    res.json(comment)
})

module.exports = router