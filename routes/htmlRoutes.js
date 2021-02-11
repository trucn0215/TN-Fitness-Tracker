const path = require("path");
const router = require("express").Router();

    // Homepage routes
    // router.get("/", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/index.html"))
    // });

    // Exercise routes
    router.get("/exercise", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });

    // Status routes
    router.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

module.exports = router;
