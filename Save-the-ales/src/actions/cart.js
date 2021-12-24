import {
  ADD_TO_CART,
  DELETE_IN_CART,
  INCREASE_DISH_IN_CART,
  DECREASE_DISH_IN_CART,
} from './types';

export function addObjectToCart(selectedDish) {
  return {
    type: ADD_TO_CART,
    dish: selectedDish,
  };
}

export function removeFromCart(id) {
  return {
    type: DELETE_IN_CART,
    payload: id,
  };
}

export function increaseDishInCart(id) {
  return {
    type: INCREASE_DISH_IN_CART,
    payload: id,
  };
}

export function decreaseDishInCart(id) {
  return {
    type: DECREASE_DISH_IN_CART,
    payload: id,
  };
}
