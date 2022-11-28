const Catagory = require("../models/CatagoriesModel");
const asyncHandler = require("express-async-handler");

//create catagories
const createCatagory = asyncHandler(async (req, res) => {
  const newCatagory = new Catagory(req.body);
  if (!newCatagory) res.status(400).json("Nothing to add to catagory");
  const createdCatagory = await Catagory.create(newCatagory);
  res.status(200).json(createdCatagory);
});

//get all catagories
const getCatagories = asyncHandler(async (req, res) => {
  const allCatagory = await Catagory.find();
  res.status(200).json(allCatagory);
});

module.exports = { createCatagory, getCatagories };
