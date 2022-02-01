import { SET_ORDERS } from "./types";

export const fetchOrders = (token) => (dispatch) => {
  fetch(`https://save-the-ales.herokuapp.com/order/detail/${token}`)
    .then((r) => r.json())
    .then((data) =>
      dispatch({
        type: SET_ORDERS,
        payload: data,
      })
    );
};
