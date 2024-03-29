import Dropdown from "./Dropdown.js";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar-dropdown.css'
import CartPopup from "../CartPopup.js";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const [activePopup, setActivePopup] = useState(false)
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const handleActivePopup = () => {
    // console.log('show popup');
    setActivePopup(true)
  }

  return (
    <>
      <li
        className="menu-items"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={closeDropdown}>
        {
          items.url && items.submenu
            ? (
              <>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={dropdown ? "true" : "false"}
                  onClick={() => toggleDropdown()}>
                  <Link to={items.url}>{items.title}</Link>
                  {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                </button>
                <Dropdown
                  depthLevel={depthLevel}
                  submenus={items.submenu}
                  dropdown={dropdown}
                />
              </>
            )
            : !items.url && items.submenu
              ? (
                <>
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={dropdown ? "true" : "false"}>
                    {items.title}
                    {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                  </button>
                  <Dropdown
                    depthLevel={depthLevel}
                    submenus={items.submenu}
                    dropdown={dropdown}
                  />
                </>
              )
              : items.popup
                ? (
                  <>
                    <Link to="" onClick={() => handleActivePopup()}>
                      {items.title_popup}
                      <span className="badge">3</span>
                    </Link>
                    <CartPopup activePopup={activePopup} closePopup={()=>setActivePopup(!activePopup)}/>
                  </>
                )
                : (
                  <Link to={items.url}>{items.title}</Link>
                )
        }
      </li>
    </>
  );
};

export default MenuItems;
