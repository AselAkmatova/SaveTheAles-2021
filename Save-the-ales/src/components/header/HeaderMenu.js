import { Link } from "react-router-dom";

export default function HeaderMenu({ handleLinkClick }) {
  return (
    <>
      <ul className="header-menu__list">
        <li>
          <Link
            className="header-menu__link"
            onClick={handleLinkClick}
            to={`/about`}
          >
            О нас
          </Link>
        </li>
        <li>
          <Link
            className="header-menu__link"
            onClick={handleLinkClick}
            to={`/dishes`}
          >
            Меню
          </Link>
        </li>
        <li>
          <Link
            className="header-menu__link"
            onClick={handleLinkClick}
            to={`/book`}
          >
            Бронь столов
          </Link>
        </li>
        <li>
          <Link
            className="header-menu__link"
            onClick={handleLinkClick}
            to={`/contacts`}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </>
  );
}
