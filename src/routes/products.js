const router = require("express").Router();
const { ProductController } = require("../controllers");

const { index, create, findByName } = new ProductController();

router.get("/", index);
router.post("/", create);
router.get("/details", findByName);

module.exports = router;
