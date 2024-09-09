const express = require("express");
const data = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleWare = require("../middlewares/admin-middleware");
const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleWare, data.getAllUsers);
router.route("/contact").get(authMiddleware, data.getAllContact);

module.exports = router;
