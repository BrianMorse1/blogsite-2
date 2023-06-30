const router = require('express').Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const loginRoute = require("./login-route");
const logoutRoute = require("./logout-route")

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/login", loginRoute);
router.use("/logout", logoutRoute);




module.exports = router;