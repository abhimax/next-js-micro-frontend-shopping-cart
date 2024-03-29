import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import classes from './shop.module.css'
const productLinks = [
  { href: '/p/1', label: 'Product 1' },
  { href: '/p/2', label: 'Product 2' },
  { href: '/p/3', label: 'Product 3' },
].map(link => {
  link.key = `product-link-${link.href}-${link.label}`;
  return link;
});

const Shop = props => (
  <div>
    <Head>
      <title>Shop</title>
      <link rel="icon" href="/next-js-micro-frontend-shopping-cart/shop/public/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className={classes.title}>This is come from [Shop]</h1>
      <h3 className="title">This is a federated page owned by localhost:3002</h3>
      <ul className={classes['product-list']}>
        {productLinks.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

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
export const getServerSideProps = async () => {
  console.log('loading slow api')
  const swapi = await fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json());
  return {props:swapi};
};
export default Shop;
