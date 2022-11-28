const express = require("express");
const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");
const { protect } = require("../middleware/AuthMiddleware");

const router = express.Router();

router.get("/api/users/:id", protect, getUser);
router.put("/api/users/:id", protect, updateUser);
router.delete("/api/users/:id", protect, deleteUser);

module.exports = router;
