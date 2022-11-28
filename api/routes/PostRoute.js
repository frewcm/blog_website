const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPost,
} = require("../controllers/PostController");
const router = express.Router();

router.post("/api/posts/", createPost);
router.put("/api/posts/:id", updatePost);
router.delete("/api/posts/:id", deletePost);
router.get("/api/posts/:id", getPost);
router.get("/api/posts/", getAllPost);

module.exports = router;
