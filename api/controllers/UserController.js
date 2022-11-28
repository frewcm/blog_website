const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const Post = require("../models/PostModel");

//update user
const updateUser = asyncHandler(async (req, res) => {
  const { id, password } = req.body;
  if (id === req.params.id) {
    if (password) {
      const salt = await bcrypt.genSalt();
      password = await bcrypt.hash(password, salt);
      return res.status(500).json(err);
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedUser);
  } else {
    return res.status(403).json("Not Authorized");
  }
});

//delete user
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const user = await User.findById(req.params.id);
  if (!user) res.send("user not found");

  if (id === req.params.id) {
    await Post.deleteMany({ username: user.username });
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json(
        `${deletedUser.username}'s account has been deleted` + deletedPost.title
      );
  } else {
    return res.status(403).json("Not Authorized");
  }
});

//get a user
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) res.status(400).json("user not found");
  res.status(200).json({
    id: user._id,
    username: user.username,
    email: user.email,
  });
});

module.exports = { updateUser, deleteUser, getUser };
