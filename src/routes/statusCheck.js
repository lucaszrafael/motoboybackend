const router = require("express").Router();

const { StatusCheckController } = require("../controllers");

const { showStatus } = new StatusCheckController();

router.use("/", showStatus);

module.exports = router;
