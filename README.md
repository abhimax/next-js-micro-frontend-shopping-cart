# Micro-Frontend with Next.js  and Webpack Module Federation
This PoC application showcases micro frontend architecture with features for both server-side and client-side rendering in Next.js. It leverages Webpack 5 Module Federation for sharing micro frontends and utilizes Next.js 14 along with @module-federation/nextjs-mf.

## Getting Started

run `pnpm run start` and browse to `http://localhost:3001` or one of the others
## How it works
To streamline the development workflow of our micro-frontend architecture, we utilize the powerful pnpm command
```bash
pnpm --parallel --filter nextjs-14-micro-frontend-poc_* dev
```
This command efficiently launches all the micro-frontend applications in our suite (namely checkout, home, and shop) simultaneously, in parallel. By doing so, it facilitates a cohesive development experience, allowing each application to be run and tested together seamlessly.

Additionally, each application shares the same index from the home application, ensuring uniformity across different services. As a result, despite running on separate ports, all applications deliver the same output, exemplifying our commitment to a unified user experience across our micro-frontend ecosystem.


## Context

There are three next.js applications

- `checkout` - port 3000
- `home` - port 3001
- `shop` - port 3002

The applications utilize omnidirectional routing and pages or components are able to be federated between applications like a SPA

It has used hooks here to ensure multiple copies of react are not loaded into scope on server or client.

The omnidirectional routing now hooks into webpack federation loading functions, so when dynamically loading remotes - you can use the same functions that webpack uses to load remotes when theres a know static import like `home/title`


### Sharing

Next.js has all its internal modules pre-shared vis `@module-federation/nextjs-mf` you do need to share react via the plugin in order to ensure that the share scope runtime requirements are included - since you cannot share modules in a normal manner, like nextjs internls, the pre-shared modules are attached at runtime to the share scope. 


