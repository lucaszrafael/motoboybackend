const router = require("express").Router();
const { UserController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const { create, profile } = new UserController();

router.post("/", create);

router.use(authMiddleware);
router.get("/profile", profile);

module.exports = router;
