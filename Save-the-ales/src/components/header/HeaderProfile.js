import { Link } from "react-router-dom";
import { PersonFill, XLg } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggingOut } from "../../actions/user";

export default function HeaderProfile() {
  let [showProfileMenu, setShowProfileMenu] = useState(false);
  let loggedIn = useSelector((state) => state.user.loggedIn);
  let dispatch = useDispatch();

  let handleProfileMenu = () => {
    setShowProfileMenu(true);
  };

  let handleCloseMenu = () => {
    setShowProfileMenu(false);
  };

  let logout = () => {
    dispatch(loggingOut());
  };

  let handleClick = () => {
    setShowProfileMenu(false);
  };

  return (
    <>
      <PersonFill
        className="header-icons__header-profile header-profile"
        size={30}
        color="black"
        onClick={handleProfileMenu}
      />
      {showProfileMenu && (
        <nav className="profile-menu">
          <XLg
            className="profile-menu__close"
            onClick={handleCloseMenu}
            size={15}
            color="black"
          />
          {!loggedIn && (
            <Link
              className="profile-menu__link"
              to={`/signin`}
              onClick={handleClick}
            >
              Войти в аккаунт
            </Link>
          )}
          {!loggedIn && (
            <Link
              className="profile-menu__link"
              to={`/signup`}
              onClick={handleClick}
            >
              Регистрация
            </Link>
          )}
          {loggedIn && (
            <Link
              className="profile-menu__link"
              to={`/profile`}
              onClick={handleClick}
            >
              Редактироваь профиль
            </Link>
          )}
          {loggedIn && (
            <Link
              className="profile-menu__link"
              to={`/profile/orderhistory`}
              onClick={handleClick}
            >
              История заказов
            </Link>
          )}
          {loggedIn && (
            <Link onClick={logout} className="profile-menu__link" to={`/`}>
              Выйти
            </Link>
          )}
        </nav>
      )}
    </>
  );
}
