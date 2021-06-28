const router = require("express").Router();
const { PurchaseController } = require("../controllers");

const { index, create } = new PurchaseController();

router.get("/", index);
router.post("/", create);

module.exports = router;
