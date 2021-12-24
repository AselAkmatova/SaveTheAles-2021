const db = require("../db");

const getCategories = (req, res) => {
  const categories = db.get("eats_categories");
  res.send(categories);
};

const getDishes = (req, res) => {
  const dishes = db.get("eats_dishes");
  res.send(dishes);
};

module.exports = {
  getCategories,
  getDishes,
};
