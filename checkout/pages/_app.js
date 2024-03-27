import {Suspense,lazy} from "react";
import App from 'next/app';
const Nav = lazy(() => {
  console.log(import('home/nav'));
  return import('home/nav');
});


function MyApp({ Component, pageProps }) {
  console.log('in app');
  return (
    <>
      <Suspense fallback={'loading'}>
      <Nav />
      </Suspense>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ctx => {
  console.log('in app getInitialProps');
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
