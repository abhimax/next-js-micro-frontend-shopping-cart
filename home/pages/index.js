import React, { Fragment, Suspense, lazy } from "react";
import Head from "next/head";
typeof window !== "undefined" && console.log(window.checkout);
const RemoteTitle = lazy(() => import("checkout/title"));

const Home = ({ loaded }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/nextjs-14-micro-frontend-poc/home/public/favicon.ico" />
      </Head>

      <div className="hero">
        <Suspense fallback={"loading remote title"}>
          <RemoteTitle />
        </Suspense>
        <h1 className="title">Micro Frontend [home]</h1>
        <h2 className="sub-title">Next.js on Webpack 5</h2>
        <p className="description">
          Micro Frontend POC with next js and webpack 5 module federation
        </p>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }

        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .sub-title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 32px;
          text-align: center;
        }

        .title,
        .description {
          text-align: center;
        }

        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }

        .card:hover {
          border-color: #067df7;
        }

        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }

        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};
//
Home.getInitialProps = async (ctx) => {
  return {};
};

export default Home;
