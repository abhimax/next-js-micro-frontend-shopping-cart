import React, {Suspense,lazy} from 'react';
import Link from 'next/link';
import classes from './nav.module.css'

export const NavTitle = lazy(() => import('./NavTitle').then(mod => {
  return {default: mod.NavTitle}
}));

const Nav = () => (
  <nav className={classes.nav}>
    <Suspense>
    <NavTitle />
    </Suspense>
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
        <Link href="/shop">
          Shop
        </Link>
        <Link href="/checkout">
          Checkout
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
        padding-right: 10px;
      }
    `}</style>
  </nav>
);

export default Nav;
