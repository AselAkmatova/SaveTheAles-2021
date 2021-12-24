import { Link } from "react-router-dom";
import { CartFill, PersonFill } from "react-bootstrap-icons";
import HeaderBurger from "./HeaderBurger";
import HeaderMenu from "./HeaderMenu";
import { useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Header() {
  let dishes = useSelector((state) => state.cart.dishes);
  let { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      <header className="header">
        <HeaderBurger />
        <OverlayTrigger
          key="bottom"
          placement="bottom"
          overlay={<Tooltip id="tooltip-bottom">На главную</Tooltip>}
        >
          <Link className="header-logo" to={`/`}>
            <h2>Savetheales</h2>
          </Link>
        </OverlayTrigger>

        <nav className="header-menu">
          <HeaderMenu />
        </nav>

        <div className="header-icons">
          <div className="header-icons__cart">
            <Link to={`/cart`}>
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={<Tooltip id="tooltip-bottom">Корзина</Tooltip>}
              >
                <CartFill
                  className="header-cart__icon"
                  size={30}
                  color="black"
                />
              </OverlayTrigger>
            </Link>

            {dishes.length > 0 && (
              <span className="header-cart__quantity">{dishes.length}</span>
            )}
          </div>
          {loggedIn ? (
            <Link to={`/profile`}>
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={<Tooltip id="tooltip-bottom">Мой профиль</Tooltip>}
              >
                <PersonFill
                  className="header-icons__profile"
                  size={30}
                  color="black"
                />
              </OverlayTrigger>
            </Link>
          ) : (
            <Link to={`/signin`}>
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={<Tooltip id="tooltip-bottom">Войти в аккаунт</Tooltip>}
              >
                <PersonFill
                  className="header-icons__profile"
                  size={30}
                  color="black"
                />
              </OverlayTrigger>
            </Link>
          )}
        </div>
      </header>
    </>
  );
}
