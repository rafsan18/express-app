const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop.controllers");

router.post("/", shopController.create);

router.get("/", shopController.find);

module.exports = router;
