import React from "react";
import { XLg, Dash, Plus } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import {
  increaseDishInCart,
  removeFromCart,
  decreaseDishInCart,
} from "../../actions/cart";

export default function CartItem({ dish }) {
  let dispatch = useDispatch();

  // let image = dish.images.map((image) => image.image);

  return (
    <div className="cart-list__cart-item cart-item ">
      <img className="cart-item__image" src={dish.img} alt="dish" />
      <h6 className="cart-item__title">{dish.name}</h6>
      <div className="cart-item__cart-info cart-info">
        <span className="cart-info__price">
          {dish.price * dish.quantity} сом
        </span>
        <div className="cart-info__quantity">
          <Dash
            onClick={() => dispatch(decreaseDishInCart(dish.id))}
            size={25}
            className="cart-info__quantity-reduce"
          />
          <span>{dish.quantity} </span>
          <Plus
            onClick={() => dispatch(increaseDishInCart(dish.id))}
            size={25}
            className="cart-info__quantity-increase"
          />
        </div>
        <XLg
          onClick={() => dispatch(removeFromCart(dish.id))}
          className="cart-info__remove"
          size={15}
          color="red"
        />
      </div>
    </div>
  );
}
