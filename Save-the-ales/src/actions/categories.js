import {
  SET_CATEGORIES,
  CATEGORIES_FETCH_START,
  CATEGORIES_FETCH_END,
} from "./types";

export const fetchCategories = () => (dispatch) => {
  dispatch({
    type: CATEGORIES_FETCH_START,
  });

  fetch("http://localhost:1717/eats/categories")
    .then((r) => r.json())
    .then((data) =>
      dispatch({
        type: SET_CATEGORIES,
        payload: data,
      })
    );

  dispatch({
    type: CATEGORIES_FETCH_END,
  });
};
