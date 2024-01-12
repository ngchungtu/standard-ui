import { useState } from "react";
import { Link } from "react-router-dom";
import MobileDropdown from "./MobileDropdown";
import '../../styles/navbar-dropdown.css'
import CartPopup from "../CartPopup";

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }) => {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    dropdown && setDropdown(false);
    showMenu && setShowMenu(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items" onClick={closeDropdown}>
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
            <Link to={items.url} onClick={closeDropdown}>
              {items.title}
            </Link>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
            {items.title}{" "}
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : items.popup
        ? (
          <>
            <Link to="/cart">
              {items.title_popup}
              <span className="badge">3</span>
            </Link>
          </>
        )
        : (
          <Link to={items.url}>{items.title}</Link>
        )
      }
    </li>
  );
};

export default MobileMenuItems;
