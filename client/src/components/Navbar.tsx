import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { useLogout } from "../hooks/useAuth";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";
import { useCurrentUser } from "../hooks/useUser";
import { Strimit } from "./svgs";
import clsx from "clsx";

const Navbar = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const { data } = useCurrentUser();

  const logout = useLogout();

  useEffect(() => {
    const resize = () => {
      if (show && window.innerWidth < 768) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    };

    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [show]);

  useEffect(() => {
    setUser({...getUserFromLocalStorage(), ...data});
    setIsLoading(false);
  }, [data]);

  const links = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/offers",
      name: "Studio",
    },
    {
      id: 3,
      path: "/book-a-demo",
      name: "Book a Demo",
    },
    {
      id: 4,
      path: "/about",
      name: "About",
    },
    // {
    //   id: 3,
    //   path: "/calculator",
    //   name: "Calculator",
    // },
    {
      id: 5,
      path: user?.id ? "" : "/signup",
      name: user?.id ? "Logout" : "Sign Up",
    },
  ];

  const logoutUser = () => {
    logout();
    router.replace("/");
  };

  function capitalizeFirstLetter(string: string) {
    if (!string) {
      return;
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div
      className={clsx(
        styles["navbar-container"],
        "border-b bg-white",
        "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-gray-200 z-50",
        "w-screen"
      )}
    >
      <nav className={clsx(styles["navbar"],
      "w-[85%] md:w-[90%] xl:w-[80%] 2xl:max-w-[1600px]"
      )}>
        <div className="mb-0 cursor-pointer w-[80px] md:w-[55px] h-[18px] relative flex -translate-x-3 md:transform-none items-center">
          <Link href="/">
            <div>
              <Strimit width={100}></Strimit>
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
            {!isLoading
              ? links.map((link) => {
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
                        <Link
                          className={styles["link"]}
                          scroll={true}
                          href={link.path}
                          passHref
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })
              : ""}
          </ul>
          {/* {!isLoading && (
            <Link
              href={"/book-a-demo"}
              className="relative p-[1px] max-w-max mb-3 md:mb-0 mt-6 md:mt-0 leading-none flex items-center md:justify-center ml-6 md:ml-8 bg-gray-400"
            >
              <span className="bg-green-500 p-1 px-2 uppercase">
                Book a Demo
              </span>
            </Link>
          )} */}
          {user?.role && !isLoading ? (
            <span className="relative p-[1px] max-w-max mt-6 md:mt-0  flex items-center md:justify-center ml-6 md:ml-8 bg-gradient-to-r from-purple-500 to-pink-500">
              <span className="bg-white px-2 uppercase">
                {capitalizeFirstLetter(user?.role)}
              </span>
            </span>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
