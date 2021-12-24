const db = require("../db");

const getContacts = (req, res) => {
  const contacts = db.get("contacts");
  res.send(contacts);
};

module.exports = {
  getContacts,
};
