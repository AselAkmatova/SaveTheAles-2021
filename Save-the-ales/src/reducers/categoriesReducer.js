import {
  CATEGORIES_FETCH_START,
  SET_CATEGORIES,
  CATEGORIES_FETCH_END,
} from '../actions/types';

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

    case CATEGORIES_FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case CATEGORIES_FETCH_END:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
