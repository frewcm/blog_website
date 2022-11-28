const express = require("express");
const {
  createCatagory,
  getCatagories,
} = require("../controllers/CatagoriesControllers");
const router = express.Router();

router.post("/api/catagories", createCatagory);
router.get("/api/catagories", getCatagories);

module.exports = router;
