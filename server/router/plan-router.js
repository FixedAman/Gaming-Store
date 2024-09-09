const express = require("express");
const router = express.Router();
const plans = require("../controllers/plan-controller");
router.route("/plans").get(plans);

module.exports = router;
