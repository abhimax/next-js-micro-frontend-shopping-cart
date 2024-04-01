const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  // return {
  //   shop: `shop@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  //   checkout: `checkout@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  // };
  return {
    shop: `shop@https://next-js-micro-frontend-shopping-cart-shop-9m0rzi65w.vercel.app/_next/static/${location}/remoteEntry.js`,
    checkout: `checkout@https://next-js-micro-frontend-shopping-cart-checkout-hy78cvult.vercel.app/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './nav': './components/nav.js',
          './home': './pages/index.js',
          './pages-map': './pages-map.js',
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions:{
          
          exposePages: true
        }
      }),
    );

    return config;
  },
};
