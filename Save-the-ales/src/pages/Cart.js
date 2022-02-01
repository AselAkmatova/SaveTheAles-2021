import React from "react";
import CartItem from "../components/cart/CartItem";
import CartTopText from "../components/cart/CartTopText";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  let dishes = useSelector((state) => state.cart.dishes);

  return (
    <>
      {!!dishes.length ? (
        <main className="cart">
          <div className="cart__cart-top cart-top">
            <CartTopText />
            <nav className="cart-top__order-nav order-nav">
              <Link className="order-nav__link" to={`/dishes`}>
                Вернуться в меню
              </Link>
              <span className="order-nav__line">---------------------</span>
              <button className="order-nav__link" disabled>
                Корзина
              </button>
              <span className="order-nav__line">---------------------</span>
              <Link className="order-nav__link" to={`/checkout`}>
                Оформить заказ
              </Link>
            </nav>
          </div>

          <section className="cart__list">
            {dishes.map((dish) => (
              <CartItem dish={dish} key={dish.id} />
            ))}
          </section>
          <p className="cart__total-price">
            Итого :{" "}
            {dishes.reduce((acc, dish) => {
              return acc + dish.quantity * dish.price;
            }, 0)}{" "}
            сом
          </p>
        </main>
      ) : (
        <div className="cart-empty">
          <h3 className="cart-empty__title">Корзина пустая</h3>
          <Link className="cart-empty__btn" to={`/dishes`}>
            Cделать заказ
          </Link>
        </div>
      )}
    </>
  );
}
