import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopyrightNotice from "../components/CopyrightNotice";
import { useRouter } from "next/router";
import PrivateRoute from "../components/PrivateRoute";
import styles from "../styles/Layout.module.scss";
import { useCurrentUser } from "../hooks/useUser";
import { useUpdateRole } from "../hooks/useUser";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../utils/localStorage";
import Modal from "../components/Modal";
import { PulseLoader, MoonLoader } from "react-spinners";
import BookACall from "../components/BookACall";
import Banner from "../components/Banner";
import jwtDecode from "jwt-decode";
import Socials from "../components/Socials";
import BookADemoCalendly from "../components/BookADemoCalendly";

interface Props {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: Props): JSX.Element => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  const { mutate: updateRole, isLoading } = useUpdateRole();

  const { data } = useCurrentUser();

  const protectedRoutes = ["/dashboard", "/streamer", "/advertiser"];
  const hiddenRoutes = ["/signup", "/login"];

  useEffect(() => {
    const user = getUserFromLocalStorage();

    if (!user?.role && user?.id) {
      setIsModalOpen(true);
    }

    if (user?.role && user?.id) {
      setIsModalOpen(false);
    }

    if (user) {
      addUserToLocalStorage({ ...user, ...data });
    }
  }, [data, router.pathname]);

  useEffect(() => {
    const user = getUserFromLocalStorage();

    if (role && user?.id) {
      updateRole({ role, id: user.id });
    }
  }, [role]);

  return (
    <PrivateRoute hiddenRoutes={hiddenRoutes} protectedRoutes={protectedRoutes}>
      <>
        {" "}
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
            <div className="bg-white w-full flex rounded-b-md overflow-hidden justify-center items-center min-h-[100px]">
              <div className="flex gap-6">
                <span
                  onClick={() => setRole("advertiser")}
                  className="bg-black rounded-md text-white w-24 flex items-center justify-center py-2 cursor-pointer"
                >
                  {isLoading && role === "advertiser" ? (
                    <PulseLoader color="white" size={8}></PulseLoader>
                  ) : (
                    "Advertiser"
                  )}
                </span>
                <span
                  onClick={() => setRole("streamer")}
                  className="bg-black rounded-md text-white w-24 flex items-center justify-center py-2 cursor-pointer"
                >
                  {isLoading && role === "streamer" ? (
                    <PulseLoader color="white" size={8}></PulseLoader>
                  ) : (
                    "Streamer"
                  )}
                </span>
              </div>
            </div>
          </Modal>
        )}
        <Banner></Banner>
        <Navbar></Navbar>
        <BookACall></BookACall>
        <BookADemoCalendly></BookADemoCalendly>
        <div className={styles["layout"]}>{children}</div>
        {/* {noFooterPages.includes(currentPagePath) ? null : <Footer></Footer>} */}
        <Socials></Socials>
        <CopyrightNotice></CopyrightNotice>
      </>
    </PrivateRoute>
  );
};

export default PageLayout;
