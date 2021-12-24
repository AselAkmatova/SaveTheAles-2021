import CartTopText from "../cart/CartTopText";
import { Link } from "react-router-dom";

export default function CheckoutTop() {
  return (
    <>
      <div className="cart__cart-top cart-top">
        <CartTopText />
        <nav className="cart-top__order-nav order-nav">
          <button className="order-nav__btn">
            <Link className="order-nav__link" to={`/dishes`}>
              Вернуться в меню
            </Link>
          </button>
          <span className="order-nav__line">-----------------------</span>
          <button className="order-nav__btn">
            <Link className="order-nav__link" to={`/cart`}>
              Корзина
            </Link>
          </button>
          <span className="order-nav__line">-----------------------</span>
          <button className="order-nav__btn" disabled>
            Оформить заказ
          </button>
        </nav>
      </div>
    </>
  );
}
