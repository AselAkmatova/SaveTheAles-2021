import { useEffect, useState } from "react";
import Dish from "../components/dishes/Dish";
import DishesFilter from "../components/dishes/DishesFilter";
import { fetchDishes } from "../actions/dishes";
import { useDispatch, useSelector } from "react-redux";
import beer from "../images/beer.svg";

export default function Dishes() {
  let [checked, setChecked] = useState("all");

  let dispatch = useDispatch();
  let { dishes, loading } = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  let dishes2 = dishes;

  if (checked !== "all") {
    dishes2 = dishes.filter((dish) => dish.categoryId === checked);
  }

  return (
    <>
      <main className="menu">
        <DishesFilter checked={checked} setChecked={setChecked} />

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
