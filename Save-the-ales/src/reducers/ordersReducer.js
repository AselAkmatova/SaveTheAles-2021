import { SET_ORDERS } from "../actions/types";

const initialState = {
  orders: [],
  loading: true,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
