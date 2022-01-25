import React from "react";
import styles from "./Header.module.css";
import logo from "./images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
const Header = ({ routes }) => {
const location = useLocation();
  return (
    <header>
      <div className={styles.header}>
          <div className={styles.logoNav}>
          <div className={styles.divLogo}>
            <img className={styles.logoIcon} src={logo} alt="logo" />
            <div className={styles.logo}>
            <div className={styles.appHouse}>
              <span className={styles.logoApp}>App</span>
              <span className={styles.logoStudio}>House</span>   
            </div>
          </div>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {routes.map(({ path, name }) => (
                  <li className={styles.navLi} key={path}>
                    <NavLink
                      to={{
                        pathname: path,
                        state: {
                          from: location.pathname,
                        },
                      }}
                      className={styles.navLink}
                      // activeClassName={styles.navLinkActive}
                      exact
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
