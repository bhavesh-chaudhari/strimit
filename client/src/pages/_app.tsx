import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import PageLayout from '../layouts/PageLayout'
import { GoogleOAuthProvider } from "@react-oauth/google";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`} >
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </GoogleOAuthProvider>
  );
}

export default MyApp
