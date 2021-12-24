import { useEffect } from "react";
import { fetchCategories } from "../../actions/categories";
import { useDispatch, useSelector } from "react-redux";

export default function DishesFilter({ checked, setChecked }) {
  let categories = useSelector((state) => state.categories.categories);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  let handleChange = (e) => {
    setChecked(e.target.id);
  };

  return (
    <aside className="menu__filter filter">
      <div className="filter__item">
        <input
          onChange={handleChange}
          type="radio"
          checked={checked === "all"}
          name="categories"
          id="all"
          key="all"
        />
        <label htmlFor="all">Все</label>
      </div>

      {categories.map((category) => (
        <div className="filter__item" key={category.id}>
          <input
            onChange={handleChange}
            type="radio"
            name="categories"
            id={category.id}
          />
          <label htmlFor={`${category.name}`}>{category.name}</label>
        </div>
      ))}
    </aside>
  );
}
