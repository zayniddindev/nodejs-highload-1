const { Router } = require("express");
const { withdrawBalance } = require("../controllers/user.controller");
const router = Router();

router.put("/:userId/withdrawBalance", async (req, res) => {
  try {
    const { userId } = req.params;
    const { amount } = req.body;
    if (!userId) {
      return res.status(400).send({ success: false, error: "userId is not provided" });
    }
    if (!amount) {
      return res.status(400).send({ success: false, error: "amount is not provided" });
    }

    const result = await withdrawBalance({ userId, amount });
    return res.status(200).send({ success: true, data: result });
  } catch (error) {
    return res.status(400).send({ success: false, error: error.message });
  }
});

module.exports = { userRoutes: router };
