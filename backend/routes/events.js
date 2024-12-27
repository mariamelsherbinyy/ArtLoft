const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
    res.send("Create event");
});

router.post("/ticket", (req, res) => {
    res.send("Buy ticket");
});

module.exports = router;
