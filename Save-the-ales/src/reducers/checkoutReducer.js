import { CHECKOUT_ERROR, SET_CHECKOUT } from "../actions/types";

const initialState = {
  checkout: [],
  checkoutError: false,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHECKOUT:
      return {
        ...state,
        checkout: action.payload,
      };

    case CHECKOUT_ERROR:
      return {
        ...state,
        checkoutError: true,
      };

    default:
      return state;
  }
}
