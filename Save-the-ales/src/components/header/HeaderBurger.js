import { useState } from "react";
import { List, XLg } from "react-bootstrap-icons";
import HeaderMenu from "./HeaderMenu";

export default function HeaderBurger() {
  let [showMenu, setShowMenu] = useState(false);

  let handleOpenMenu = () => {
    setShowMenu(true);
  };

  let handleCloseMenu = () => {
    setShowMenu(false);
  };

  let handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <>
      <List
        size={36}
        color="black"
        onClick={handleOpenMenu}
        className="header-menu-burger"
      />
      {showMenu && (
        <div className="header-menu-modal">
          <XLg
            className="header-menu-modal__close"
            onClick={handleCloseMenu}
            size={25}
            color="black"
          />
          <HeaderMenu handleLinkClick={handleLinkClick} />
        </div>
      )}
    </>
  );
}
