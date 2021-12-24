import { SET_ORDERS, ORDERS_FETCH_START, ORDERS_FETCH_END } from "./types";

export const fetchOrders = (token) => (dispatch) => {
  dispatch({
    type: ORDERS_FETCH_START,
  });

  fetch(`http://localhost:1717/order/detail/${token}`)
    .then((r) => r.json())
    .then((data) =>
      dispatch({
        type: SET_ORDERS,
        payload: data,
      })
    );

  dispatch({
    type: ORDERS_FETCH_END,
  });
};
