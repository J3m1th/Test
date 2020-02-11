module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'test',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },

    // Global CSS 

    css: [
        'swiper/dist/css/swiper.css',
        'aos/dist/aos.css',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: './plugins/vue-awesome-swiper.js', ssr: false },
        { src: "~/plugins/aos", ssr: false }
    ],

    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        vendor: ['aos']
    }
}