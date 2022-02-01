import { SET_DISHES } from "../actions/types";

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

    default:
      return state;
  }
}
