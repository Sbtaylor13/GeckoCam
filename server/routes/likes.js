const express = require("express");
const router = express.Router();
const { likes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

/*
-Check if the like exists
SELECT * FROM likes WHERE factBoardId = :factBoardId AND userId = :userId;

-If like does not exist, create a new like
INSERT INTO likes (factBoardId, userId) VALUES (:factBoardId, :userId);

-If like exist, delete the existing like
DELETE FROM likes WHERE factBoardId = :factBoardId AND userId = :userId;
*/
router.post("/", validateToken, async (req, res) => {
  const { factBoardId } = req.body;
  const userId = req.user.id;
  const found = await likes.findOne({
    where: { factBoardId: factBoardId, userId: userId },
  });
  if (!found) {
    await likes.create({ factBoardId: factBoardId, userId: userId });
    res.json({ liked: true });
  }else {
    await likes.destroy({
      where: { factBoardId: factBoardId, userId: userId },
    });
    res.json({ liked: false });
  }
});

module.exports = router;