import React, { useState } from "react";
import { sideBarLinks } from "../../utils/constants";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  const [active, setActive] = useState("Overview");

  return (
    <div className={styles.layout_wrapper}>
      <header className={styles.top_nav}>
        <span className={styles.logo}>TransMonitor</span>
        <div>
          <label htmlFor="nav-input">
            <img src="./icons/search.svg" alt="logo" />
          </label>
          <input
            placeholder="Search..."
            type="text"
            className={styles.input}
            id="nav-input"
          />
        </div>
        <ul className={`${styles.right_nav}`}>
          <li>Support</li>
          <li>FAQ</li>
          <li className={styles.notification}>
            <div className={styles.notification_count}>3</div>
            <img src="./icons/bell.svg" alt="notification" />
          </li>
          <li className={`${styles.user}`}>
            <div className={styles.username}>
              <small>Hello</small>
              <p>Oluwaleke Ojo</p>
            </div>
            <img src="./images/user.png" alt="user" className="ml-3" />
          </li>
        </ul>
      </header>
      <nav className={styles.side_bar}>
        <p className={styles.gen_invoice}>GENERATE INVOICE</p>
        {sideBarLinks.map((item, index) => {
          return (
            <li key={index} className={styles.nav_item}>
              <div className={styles.title}>
                {item.icon_src && (
                  <img src={`icons/${item.icon_src}`} alt={item.title} />
                )}
                <span className={`${styles.nav_title}`}>{item.title}</span>
              </div>

              <ul>
                {item.children &&
                  item.children.map((child, index) => {
                    return (
                      <li
                        className={[
                          styles.nav_children,
                          active === child.title && styles.active,
                        ].join(" ")}
                        key={index}
                        onClick={() => setActive(child.title)}
                      >
                        <img
                          src={`icons/${child.icon_src}`}
                          alt={child.title}
                        />
                        <span className={styles.nav_title}>{child.title}</span>
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </nav>
      <div className={styles.main_content}>{children}</div>
    </div>
  );
}

export default Layout;
