const db = require("../db");
const shortid = require("shortid");
const error = (res, status, text) => res.status(status).json(text).end();

const getAll = (req, res) => {
  const order = db.get("order");
  res.send(order);
};

const getItem = (req, res) => {
  const { token } = req.params;
  const item = db.get("order").filter({ token }).value();
  if (!item) return error(res, 404, "cannot find item with this token");
  res.send(item);
};

function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object;
}

const createNew = (req, res) => {
  const {
    clientName,
    token,
    clientAddress,
    clientTel,
    dishes,
    date,
    additionalInfo,
    changeAmount,
  } = req.body;
  const permisbleKeys =
    "clientName, token, clientAddress, clientTel, dishes, date, additionalInfo, changeAmount".split(
      ", "
    );

  const keys = Object.keys(req.body);
  const invalid = keys.filter((k) => !permisbleKeys.includes(k));
  if (invalid.length) {
    return error(res, 400, `${invalid.join(", ")} is not valid key`);
  }

  // if (!clientName) return error(res, 400, "name attribute is required");
  // if (!clientAddress) return error(res, 400, "address attribute is required");
  // if (!clientTel) return error(res, 400, "tel attribute is required");
  // if (!orderedDish) return error(res, 400, "orderedDish attribute is required");
  // if (!cashAmount) return error(res, 400, "cashAmount attribute is required");

  // if (typeof clientName !== "string")
  //   return error(res, 400, "name attribute should be type `string`");
  // if (typeof cashAmount !== "number")
  //   return error(res, 400, "cashAmount attribute should be type `number`");
  // if (typeof clientTel !== "number")
  //   return error(res, 400, "cost attribute should be type `number`");

  const newItem = {
    id: shortid.generate(),
    clientName,
    token,
    clientAddress,
    clientTel,
    additionalInfo,
    dishes,
    date,
    changeAmount,
  };

  db.get("order").push(newItem).write();

  res.send({ ...newItem });
};

module.exports = {
  getAll,
  getItem,
  createNew,
};
