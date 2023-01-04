import { useEffect } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import PageLayout from "../layouts/PageLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {

   useEffect(() => {
     AOS.init({
       disable: function () {
         return /bot|googlebot|crawler|spider|robot|crawling/i.test(
           navigator.userAgent
         );
       },
     });
   }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider
        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
      >
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} ></ReactQueryDevtools>
      </GoogleOAuthProvider>
      <ToastContainer></ToastContainer>
    </QueryClientProvider>
  );
}

export default MyApp;
