const express = require("express");
const router = express.Router();
const { likes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", validateToken, async (req, res) => {
  const { factBoardId } = req.body;
  const userId = req.user.id;

  const found = await likes.findOne({
    where: { factBoardId: factBoardId, userId: userId },
  });
  if (!found) {
    await likes.create({ factBoardId: factBoardId, userId: userId });
    res.json({ liked: true });
  } else {
    await likes.destroy({
      where: { factBoardId: factBoardId, userId: userId },
    });
    res.json({ liked: false });
  }
});

module.exports = router;