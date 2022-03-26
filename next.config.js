const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n,
    webpack5: true,
    webpack: (config) => {
        
        /* 
            that snippet fixes the resolve of fs module inside Nav component, message:

            error - ./node_modules/next-i18next/dist/commonjs/serverSideTranslations.js:78:0
            Module not found: Can't resolve 'fs'

            Import trace for requested module:
            ./node_modules/next-i18next/serverSideTranslations.js
            ./components/Nav.js
            ./pages/_app.js
        */
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            path: false,
            process: false,
        };

        /*
            that snippet fixes the warning raised by the snippet above with this message:
            
            warn  - ./node_modules/next-i18next/dist/commonjs/serverSideTranslations.js
            Critical dependency: the request of a dependency is an expression
        */
        config.module = {
            ...config.module,
            exprContextCritical: false,
        };

        return config;
    },
};

module.exports = nextConfig;
