import { useDispatch, useSelector } from "react-redux";
import { addObjectToCart } from "../../actions/cart";

export default function Dish({ data }) {
  let dispatch = useDispatch();

  let dishes = useSelector((state) => state.dishes.dishes);
  let cartDishes = useSelector((state) => state.cart.dishes);

  let addToCart = (id) => {
    let selectedDish = dishes.filter((dish) => dish.id === id);
    dispatch(addObjectToCart(selectedDish[0]));
  };

  return (
    <div className="dishes__dish dish">
      <img className="dish__image" src={data.img} alt="dish" />
      <h3 className="dish__title">{data.name}</h3>
      <div className="dish__dish-info dish-info">
        <span className="dish-info__price">{Math.round(data.price)} сом</span>

        {cartDishes.length > 0 &&
          cartDishes.map(
            (i) =>
              i.id === data.id && (
                <button
                  className="dish-info__btn dish-info__btn_selected"
                  disabled
                >
                  Добавлен
                </button>
              )
          )}

        <button className="dish-info__btn" onClick={() => addToCart(data.id)}>
          В корзину
        </button>
      </div>
    </div>
  );
}
