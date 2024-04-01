const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    home: `home@https://vercel.com/abhiman-ranaweeras-projects/next-js-micro-frontend-shopping-cart-home/_next/static/${location}/remoteEntry.js`,
    checkout: `checkout@https://vercel.com/abhiman-ranaweeras-projects/next-js-micro-frontend-shopping-cart-checkout/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shop',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './shop': './pages/shop.js',
          './pdp': './pages/p/[...slug].js',
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
