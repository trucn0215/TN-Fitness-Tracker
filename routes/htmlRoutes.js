const path = require("path");
const router = require("express").Router();

    // Exercise routes
    router.get("/exercise", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });

    // Status routes
    router.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

module.exports = router;
