const eats = require("./eats");
const order = require("./order");

module.exports = {
  users: [
    {
      token: "token_bhje73bkj38jlds9",
      data: {
        username: "admin",
        firstName: "John",
        age: 18,
      },
      auth: {
        username: "admin",
        password: "1234",
      },
    },
  ],
  contacts: [{ email: "info@kg", phone: "999511", address: "Tynystanova" }],
  eats_categories: eats.categories,
  eats_dishes: eats.dishes,
  order: order.main,
};
