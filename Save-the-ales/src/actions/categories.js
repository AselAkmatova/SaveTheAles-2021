import { SET_CATEGORIES } from "./types";

export const fetchCategories = () => (dispatch) => {
  fetch("https://save-the-ales.herokuapp.com/eats/categories")
    .then((r) => r.json())
    .then((data) =>
      dispatch({
        type: SET_CATEGORIES,
        payload: data,
      })
    );
};
