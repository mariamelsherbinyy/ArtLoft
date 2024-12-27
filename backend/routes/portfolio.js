const express = require("express");
const router = express.Router();
const { uploadPortfolio, setVisibility } = require("../controllers/portfolio");

router.post("/upload", uploadPortfolio);
router.put("/visibility", setVisibility);

module.exports = router;
