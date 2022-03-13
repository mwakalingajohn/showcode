const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const path = require('path');

module.exports = {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    router: { 
        mode: 'hash'
    },
    
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    publicRuntimeConfig: {
        isDesktop: true,
        isDistributing: true,
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: 'Showcode',
        htmlAttrs: { lang: 'en' },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Create beautiful images of code.' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:description', content: 'Create beautiful images of code.' },
            { name: 'twitter:title', content: 'Showcode' },
            { name: 'twitter:image', content: 'https://showcode.app/twitter_summary_card.png' },
            { name: 'twitter:site', content: 'https://showcode.app' },
            { name: 'twitter:creator', content: '@stevethebauman' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'theme-color', content: '#ffffff' },
        ],
        link: [
            {
                rel: 'apple-touch-icon',
                type: 'image/png',
                sizes: '180x180',
                href: '/apple-touch-icon.png',
            },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
        ],
        script: [],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        path.join(__dirname, 'plugins/shiki'),
        path.join(__dirname, 'plugins/queue'),
        path.join(__dirname, 'plugins/memory'),
        path.join(__dirname, 'plugins/events'),
        path.join(__dirname, 'plugins/v-tooltip'),
        path.join(__dirname, 'plugins/v-dragged'),
        path.join(__dirname, 'plugins/vue-tailwind'),
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxt/postcss8', '@nuxtjs/composition-api/module'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config) {
            config.plugins.push(new MonacoWebpackPlugin());
        },

        babel: {
            plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
        },

        postcss: {
            plugins: {
                tailwindcss: { config: path.join(__dirname, 'tailwind.config.js') },
                autoprefixer: {},
            },
        },
    },
};
