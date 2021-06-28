const router = require("express").Router();
const { SignInController } = require("../controllers");

const { sign } = new SignInController();

router.post("/", sign);

module.exports = router;
