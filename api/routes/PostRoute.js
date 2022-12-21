const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPost,
} = require("../controllers/PostController");
const { protect } = require("../middleware/AuthMiddleware");
const router = express.Router();

router.post("/api/posts/", protect, createPost);
router.put("/api/posts/:id", protect, updatePost);
router.delete("/api/posts/:id", protect, deletePost);
router.get("/api/posts/:id", protect, getPost);
router.get("/api/posts/", getAllPost);

module.exports = router;
