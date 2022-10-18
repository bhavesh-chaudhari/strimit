import React, { useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  const router = useRouter();

    const links = [
      {
        id: 1,
        path: "/",
        name: "Home",
      },
      {
        id: 2,
        path: "/about-us",
        name: "About Us",
      },
      {
        id: 3,
        path: "/calculator",
        name: "Calculator",
      },
      {
        id: 4,
        path: "/signup",
        name: "Sign Up",
      },
    ];

  return (
    <div className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <div className={styles["nav-logo"]}>
          <Link href="/" passHref>
            <a>
              <h2>Live</h2>
            </a>
          </Link>
        </div>
        <div
          onClick={() => setShow((prevState) => !prevState)}
          className={
            show
              ? `${styles["hamburger-btn"]} ${styles["open"]}`
              : styles["hamburger-btn"]
          }
        >
          <div className={styles["hamburger"]}></div>
        </div>
        <div
          className={
            show
              ? styles["nav-links"]
              : `${styles["nav-links"]} ${styles["hide"]}`
          }
        >
          <ul>
            <li className={styles["menu-title"]}>Menu</li>
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  onClick={() => {
                    setShow((prevState) => !prevState);
                  }}
                  className={
                    router.pathname === link.path ? styles["active"] : ""
                  }
                >
                  <Link scroll={true} href={link.path} passHref>
                    <a>{link.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles["mobile-menu-logo"]}>
            <div className={styles["mobile-menu-logo-content"]}>
              <p>Live</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
