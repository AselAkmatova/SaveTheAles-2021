import { SET_DISHES } from "./types";

export const fetchDishes = () => (dispatch) => {
  fetch("https://save-the-ales.herokuapp.com/eats/dishes")
    .then((r) => r.json())
    .then((data) => {
      dispatch({
        type: SET_DISHES,
        payload: data,
      });
    });
};
