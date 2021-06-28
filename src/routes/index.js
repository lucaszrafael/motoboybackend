const router = require("express").Router();

const { authMiddleware } = require("../middlewares");

const statusCheckRoute = require("./statusCheck");
const usersRoute = require("./users");
const signInRoute = require("./signIn");
const productsRoute = require("./products");
const purchasesRoute = require("./purchases");

router.use("/status", statusCheckRoute);
router.use("/users", usersRoute);
router.use("/signin", signInRoute);

router.use(authMiddleware);
router.use("/products", productsRoute);
router.use("/purchases", purchasesRoute);

module.exports = router;
