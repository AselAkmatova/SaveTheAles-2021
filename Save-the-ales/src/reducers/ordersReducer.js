import {
  ORDERS_FETCH_END,
  ORDERS_FETCH_START,
  SET_ORDERS,
} from '../actions/types';

const initialState = {
  orders: [],
  loading: true,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ORDERS_FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };

    case ORDERS_FETCH_END:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
