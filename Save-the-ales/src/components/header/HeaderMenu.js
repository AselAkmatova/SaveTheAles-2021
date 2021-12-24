import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <>
      <Link className="header-menu__link" to={`/about`}>
        О нас
      </Link>
      <Link className="header-menu__link" to={`/dishes`}>
        Меню
      </Link>
      <Link className="header-menu__link" to={`/book`}>
        Забронировать стол
      </Link>
      <Link className="header-menu__link" to={`/contacts`}>
        Контакты
      </Link>
    </>
  );
}
