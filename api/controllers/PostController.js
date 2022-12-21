const asyncHandler = require("express-async-handler");
const Post = require("../models/PostModel");
const User = require("../models/UserModel");

//create post
const createPost = asyncHandler(async (req, res) => {
  const newPost = new Post(req.body);

  const createdPost = await Post.create(newPost);

  res.status(200).json(createdPost);
});

//update post
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }

  if (post.username === req.body.username) {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updatedPost);
  } else {
    res.status(400).json("Not Authorized");
  }
});

//delete post
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("post not found");
  }

  if (post.username === req.body.username) {
    await post.remove();
    res.status(200).json("post has been deleted");
  } else {
    res.status(400).json("Not Authorized");
  }
});

//get post
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) res.status(400).json("post not found");
  res.status(200).json(post);
});

//get all posts
const getAllPost = asyncHandler(async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  let posts;
  if (username) {
    posts = await Post.find({ username });
  } else if (catName) {
    posts = await Post.find({ catagories: { $in: [catName] } });
  } else {
    posts = await Post.find();
  }
  res.status(200).json(posts);
  const post = await Post.findById(req.params.id);
  if (!post) res.status(400).json("post not found");
  res.status(200).json(post);
});

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPost,
};
