import {
  ADD_TO_CART,
  DELETE_IN_CART,
  INCREASE_DISH_IN_CART,
  DECREASE_DISH_IN_CART,
} from '../actions/types';

const initialState = { dishes: [] };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let inCart = state.dishes.filter((dish) => dish.id === action.dish.id);
      if (inCart.length === 0) {
        let newDishes = [...state.dishes, { ...action.dish, quantity: 1 }];
        return {
          ...state,
          dishes: newDishes,
        };
      } else {
        let newDishes = state.dishes.map((dish) => {
          if (dish.id !== action.dish.id) {
            return dish;
          } else {
            return { ...dish, quantity: dish.quantity + 1 };
          }
        });

        return {
          ...state,
          dishes: newDishes,
        };
      }

    case DELETE_IN_CART:
      return {
        ...state,
        dishes: state.dishes.filter((dish) => dish.id !== action.payload),
      };

    case INCREASE_DISH_IN_CART:
      return {
        ...state,
        dishes: state.dishes.map((dish) => {
          if (dish.id !== action.payload) {
            return dish;
          } else {
            return { ...dish, quantity: dish.quantity + 1 };
          }
        }),
      };

    case DECREASE_DISH_IN_CART:
      return {
        ...state,
        dishes: state.dishes.map((dish) => {
          if (dish.id !== action.payload) {
            return dish;
          } else {
            return { ...dish, quantity: dish.quantity - 1 };
          }
        }),
      };

    default:
      return state;
  }
}
