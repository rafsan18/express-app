const Shop = require("../models/Shop.models");

module.exports.create = (shop) => {
    return Shop.create(shop);
};

module.exports.find = () => {
    return Shop.find({});
};
