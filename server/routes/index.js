const express = require("express");
const router = express.Router();

const userRouter = require("./user/index");
const labelRouter = require("./label/index");
const milestoneRouter = require("./milestone/index");

const { isAuth } = require("../middlewares/auth");

router.use("/user", userRouter);

router.use("/label", isAuth, labelRouter);
router.use("/milestone", isAuth, milestoneRouter);

module.exports = router;
