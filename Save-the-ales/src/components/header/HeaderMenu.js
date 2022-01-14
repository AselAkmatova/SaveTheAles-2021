import { Link } from "react-router-dom";

export default function HeaderMenu({ handleLinkClick }) {
  return (
    <>
      <Link
        onClick={handleLinkClick}
        className="header-menu__link"
        to={`/about`}
      >
        О нас
      </Link>
      <Link
        onClick={handleLinkClick}
        className="header-menu__link"
        to={`/dishes`}
      >
        Меню
      </Link>
      <Link
        onClick={handleLinkClick}
        className="header-menu__link"
        to={`/book`}
      >
        Забронировать стол
      </Link>
      <Link
        onClick={handleLinkClick}
        className="header-menu__link"
        to={`/contacts`}
      >
        Контакты
      </Link>
    </>
  );
}
