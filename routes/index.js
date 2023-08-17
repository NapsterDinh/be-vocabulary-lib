const express = require("express");
const router = express.Router();
const libRoutes = require("./vocabularyLibRoutes");

router.use("/vocabulary-lib", libRoutes);
module.exports = router;
