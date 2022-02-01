import { SET_CATEGORIES } from "../actions/types";

const initialState = {
  categories: [],
  loading: true,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
