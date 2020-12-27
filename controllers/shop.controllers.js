const shopService = require("../services/shop.service");

module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports.find = async (req, res, next) => {
    try {
        const shop = await shopService.find(req.body);
        return res.status(200).send(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
