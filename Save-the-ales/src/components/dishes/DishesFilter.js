import { useEffect } from "react";
import { fetchCategories } from "../../actions/categories";
import { useDispatch, useSelector } from "react-redux";

export default function DishesFilter({ clicked, setClicked }) {
  let categories = useSelector((state) => state.categories.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  let handleClick = (e) => {
    setClicked(e.target.id);
  };

  return (
    <aside className="menu__filter filter">
      <button
        className="filter__item"
        onClick={handleClick}
        name="categories"
        id="all"
        key="all"
      >
        Все
      </button>

      {categories.map((category) => (
        <button
          className="filter__item"
          key={category.id}
          onClick={handleClick}
          name="categories"
          id={category.id}
        >
          {category.name}
        </button>
      ))}
    </aside>
  );
}
