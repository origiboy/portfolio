// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
    devtools: { enabled: true },
    typescript: {
        typeCheck: true,
        strict: true,
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/assets/style/varibles.scss";',
                },
            },
        },
    },
    modules: [
        // ...
        '@nuxt/eslint',
        '@vueuse/motion/nuxt',
		'nuxt-aos',
        // ...
    ],
    eslint: {
        config: {
            stylistic: {
                indent: 'tab',
                semi: true,
            },
        },
    },
    runtimeConfig: {
        public: {
            motion: {
                directives: {
                    'pop-bottom': {
                        initial: {
                            scale: 0,
                            opacity: 0,
                            y: 100,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        },
                    },
                },
            },
        },
    },
    generate: {
        publicPath: 'https://origiboy.github.io/portfolio/'
    }
}
