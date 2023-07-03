// @refresh reset
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  let show = true;

  const backgroundImage = 'https://lh3.googleusercontent.com/u/1/drive-viewer/AFGJ81qFoZhtjDpkow-phxhpQaHfwrHqzZzmL1y5gB_pQ-NalEm_8r3NLVDOOI1qUQRAvdLdjR0fFxshFJQcyURajauuv1_f0Q=w1920-h1007';

  const isLoginPage = pathname === '/login';
  const isSignupPage = pathname === '/signup';
  const isLogoutPage = pathname == '/profile';

  if (pathname === '/login' || pathname === '/signup' || pathname === '/profile') {
    show = false
  }

  return (
    <SessionProvider session={pageProps.session}>
      <div className="page-wrapper">
        <main>
          <Head>
            {(isLoginPage || isSignupPage || isLogoutPage) && (
              <style>{`
              html {
                background: url(${backgroundImage});
                background-size: cover;
                background-repeat: no-repeat;
                min-height: 100%;
                transition-duration: 1000s;
              }
        
              html:hover {
                transition-duration: 100s;
                transform-style: flat;
                margin-left: -50%;
              }
              `}</style>
            )},
            {(!isLoginPage && !isSignupPage && !isLogoutPage) && (
              <style>{`
                html {
                  background: #151515;
                }
                body {
                  margin: 0;
                  color: white;
                }
                .navbar {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  background-color: black;
                  color: white;
                  height: 8vh;
                  border-bottom: 1px solid red;
                }

                .navbar__logo {
                  padding-left: 20px;
                }
                
                .navbar > div {
                  display: flex;
                  align-items: center;
                }
                
                .navbar > div > * {
                  margin-right: 70px;
                  color: white;
                  text-decoration: none;
                  font-size: 1.3rem;
                }
                
                .navbar > div > *:last-child {
                  margin-right: 70px;
                }

                .footer {
                  background-color: black;
                  color: white;
                  padding: 20px 0;
                  text-align: center;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  width: 100%;
                }
                
                .footer__container {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                }
                
                p {
                  margin: 0;
                }
                
                .socialLinks {
                  margin-right: 2%;
                  margin-left: 50%;
                }
                
                .socialLink {
                  display: inline-block;
                  color: white;
                  text-decoration: none;
                  margin-right: 20px;
                }

                .socialLink {
                  display: inline-block;
                  color: white;
                  font-size: 1.3rem;
                  text-decoration: none;
                  margin-right: 20px;
                }
                
                @media screen and (min-width: 1000px) {
                  .socialLinks {
                    margin-right: 2%;
                    margin-left: 55%;
                  }
                }

                @media screen and (max-width: 810px) {
                  .socialLinks {
                    margin-right: 2%;
                    margin-left: 30%;
                  }
                }

                @media screen and (max-width: 570px) {
                  .footer__container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  }

                  .socialLinks {
                    margin: 0;
                    margin-top: 10px;
                  }
                }
              `}</style>
            )}
          </Head>
          {show && <Navbar />}
          {show && <Footer />}
          <Component {...pageProps} />
        </main>
      </div>
      <style jsx>{`
        .page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: relative;
        }

        main {
          flex-grow: 1;
        }
      `}</style>
    </SessionProvider>
  );
};