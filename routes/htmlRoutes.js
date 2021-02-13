const router = require("express").Router();
const path = require("path");

router.get('/exercise', (req, res) => {
    res.sendFile(_dirname, "../public/excercise.html")
})

router.get('/stats', (req, res) => {
    res.sendFile(_dirname, "../public/stats.html")
})

module.exports = router;