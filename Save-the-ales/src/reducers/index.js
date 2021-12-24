import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import dishesReducer from "./dishesReducer";
import categoriesReducer from "./categoriesReducer";
import contactsReducer from "./contactsReducer";
import userReducer from "./userReducer";
import ordersReducer from "./ordersReducer";
import checkoutReducer from "./checkoutReducer";

export default combineReducers({
  cart: cartReducer,
  dishes: dishesReducer,
  categories: categoriesReducer,
  contacts: contactsReducer,
  user: userReducer,
  orders: ordersReducer,
  checkout: checkoutReducer,
});
