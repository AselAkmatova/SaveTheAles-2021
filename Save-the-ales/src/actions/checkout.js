import { SET_CHECKOUT, CHECKOUT_ERROR } from "./types";

export const fetchCheckout = (form) => (dispatch) => {
  fetch("http://localhost:1717/order/create", {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.token) {
        dispatch({
          type: SET_CHECKOUT,
          payload: data,
        });
      } else {
        dispatch({
          type: CHECKOUT_ERROR,
        });
      }
    });
};
