import { menuItemsData } from "../../router/menuItemsData";
import MenuItems from "./MenuItems";
import '../../styles/navbar-dropdown.css'

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
        <div className="menu-search">
          <input placeholder="Tìm kiếm nhanh..." />
          <i className="ri-search-line"></i>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
