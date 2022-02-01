import { useEffect, useState } from "react";
import Dish from "../components/dishes/Dish";
import DishesFilter from "../components/dishes/DishesFilter";
import { fetchDishes } from "../actions/dishes";
import { useDispatch, useSelector } from "react-redux";
import beer from "../images/beer.svg";

export default function Dishes() {
  let [clicked, setClicked] = useState("all");

  let dispatch = useDispatch();
  let { dishes, loading } = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  let dishes2 = dishes;

  if (clicked !== "all") {
    dishes2 = dishes.filter((dish) => dish.categoryId === clicked);
  }

  return (
    <>
      <main className="menu">
        <h2 className="menu__title">Меню</h2>
        <DishesFilter clicked={clicked} setClicked={setClicked} />

        <section className="menu__dishes dishes">
          {loading ? (
            <img
              className="dishes__loading loading"
              src={beer}
              alt="beer icon"
            ></img>
          ) : (
            dishes2.map((dish) => <Dish data={dish} key={dish.id} />)
          )}
        </section>
      </main>
    </>
  );
}
