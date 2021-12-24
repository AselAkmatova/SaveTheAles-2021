const express = require("express");
const app = express();
const port = 1717;
const defaultData = require("./db/defaultData");
const cors = require("cors");
const auth = require("./routes/auth");
const eats = require("./routes/eats");
const order = require("./routes/order");
const contacts = require("./routes/contacts");
const db = require("./db");

app.use(cors());
db.defaults(defaultData).write();

app.use(express.json());

app.get("/me", auth.me);
app.post("/signin", auth.signin);
app.post("/signup", auth.signup);

app.get("/eats/categories", eats.getCategories);
app.get("/eats/dishes", eats.getDishes);

app.get("/contacts", contacts.getContacts);

app.get("/order", order.getAll);
app.get("/order/detail/:token", order.getItem);
app.post("/order/create", order.createNew);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
