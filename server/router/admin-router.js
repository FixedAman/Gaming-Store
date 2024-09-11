const express = require("express");
const data = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleWare = require("../middlewares/admin-middleware");
const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleWare, data.getAllUsers);
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleWare, data.getUserData);
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleWare, data.getUpdateById);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleWare, data.getDeleteUser);
router
  .route("/contact")
  .get(authMiddleware, adminMiddleWare, data.getAllContact);
router
  .route("/contact/delete/:id")
  .delete(authMiddleware, adminMiddleWare, data.getContactDelete);

module.exports = router;
