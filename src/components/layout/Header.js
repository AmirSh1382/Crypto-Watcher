import React, { useState } from "react";

// React-router-dom
import { Link } from "react-router-dom";

// MUI Icon
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Styles
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeItem, setActiveItem] = useState("spotMarket");

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="shadow-xl w-full">
      <nav className="max-w-6xl flex justify-between mx-auto py-5 px-3 md:px-12">

        {/* LOGO */}
        <Link to="/" onClick={() => {setActiveItem("spotMarket"); closeMenu() }}>
          <div className="flex items-center">
            <PaidOutlinedIcon className="text-amber-300" />
            <div className="font-bold">
              <span className="text-amber-300">C</span>rpto
              <span className="text-amber-300">W</span>atcher
            </div>
          </div>
        </Link>

        {/* NAV ITEMS */}
        <div>
          <div className={`${styles.navbar} ${isOpen ? styles.open : styles.hide}`}>
            <CloseIcon className={styles.closeIcon} onClick={closeMenu} />
            <ul>
              <Link to="/aboutproject" onClick={() => {setActiveItem("aboutProject"); closeMenu()}}>
                <li className={activeItem === "aboutProject" ? styles.active : ""}>
                  About Project
                </li>
              </Link>

              <Link to="/watchlist" onClick={() => {setActiveItem("watchlist"); closeMenu()}}>
                <li className={activeItem === "watchlist" ? styles.active : ""}>
                  Watch List
                </li>
              </Link>

              <Link to="/" onClick={() => {setActiveItem("spotMarket"); closeMenu()}}>
                <li className={activeItem === "spotMarket" ? styles.active : ""}>
                  Spot Markets
                </li>
              </Link>
            </ul>
          </div>

          <MenuIcon onClick={openMenu} className={styles.menuIcon} />
        </div>
      </nav>
    </header>
  );
};

export default Header;