import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { logout } from "../hooks/useAuth";
import Image from "next/image";

const Navbar = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const loggedInUser = getUserFromLocalStorage();
    setUser(loggedInUser);
  }, [user]);

  useEffect(()=>{

    const resize = ()=>{
      if (show && window.innerWidth < 768) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }

    window.addEventListener("resize", resize)

    resize()

    return ()=>{
      window.removeEventListener("resize", resize)
    }

  }, [show])

  const links = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/calculator",
      name: "Calculator",
    },
    {
      id: 4,
      path: user ? "" : "/signup",
      name: user ? "Logout" : "Sign Up",
    },
  ];

  const logoutUser = () => {
    logout();
    router.replace("/");
  };

  return (
    <div className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <div className="mb-0 cursor-pointer w-[80px] md:w-[55px] h-[18px] relative flex -translate-x-3 md:transform-none items-center">
          <Link href="/">
            <div>
              <Image
                src={"/logos/live.svg"}
                layout={"fill"}
                alt={"Livestream.ads Logo"}
              />
            </div>
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
                  {link.path === "" ? (
                    <button onClick={logoutUser} className={styles["link"]}>
                      {link.name}
                    </button>
                  ) : (
                    <Link scroll={true} href={link.path} passHref>
                      <a className={styles["link"]}>{link.name}</a>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
