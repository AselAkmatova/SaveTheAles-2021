import { DISHES_FETCH_END, SET_DISHES, DISHES_FETCH_START } from "./types";

export const fetchDishes = () => (dispatch) => {
  dispatch({
    type: DISHES_FETCH_START,
  });
  fetch("https://save-the-ales.herokuapp.com/eats/dishes")
    .then((r) => r.json())
    .then((data) => {
      dispatch({
        type: SET_DISHES,
        payload: data,
      });
    });

  dispatch({
    type: DISHES_FETCH_END,
  });
};
