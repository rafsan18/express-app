const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({ message: "Hello World!!" });
});

router.get(
    "/userInfo",
    function (req, res, next) {
        console.log("Method", req.method);
        next();
    },
    function (req, res, next) {
        res.json({ username: "rafsan18", name: "Rafsan", age: 31 });
    }
);

module.exports = router;
