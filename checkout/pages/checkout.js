import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import classes from './checkout.module.css';
const CC = dynamic(() => import('../components/ClientOnlyComponent'),{ssr:false}); //made it client component here
const Checkout = props => (
  <div>
    <Head>
      <title>checkout</title>
      <link rel="icon" href="/next-js-micro-frontend-shopping-cart/checkout/public/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className={classes.title}>This is come from [checkout]</h1>
      <CC />
      <h3 className="title">This is a federated page owned by localhost:3000</h3>
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
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);
export default Checkout;
