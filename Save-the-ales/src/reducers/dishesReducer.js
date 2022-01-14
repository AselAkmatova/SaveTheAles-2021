import {
  SET_DISHES,
  DISHES_FETCH_END,
  DISHES_FETCH_START,
} from "../actions/types";

const initialState = {
  dishes: [],
  loading: true,
};
export default function dishesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DISHES:
      return {
        ...state,
        dishes: action.payload,
        loading: false,
      };
    case DISHES_FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case DISHES_FETCH_END:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
